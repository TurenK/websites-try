var jsondata;
var showmlcount;
function submitForm(){
	if (!checkPrice()){
		return false;
	}else{
		var jsonObj = {};
		var arguObj = "";
		jsonObj["keywords"] = (""+document.forms["search_form"]["keywords_input"].value).replace(/\@|\*|\=|\+|\(|\)|\{|\}|\[|\]|\!|\?|\<|\>|\#|\&|\$|\_|\/|\\|\||\.|\,|;|\:|:|\"|\'|\`|\~|\%|\^/g,"");
		arguObj = arguObj + "keywords="+jsonObj["keywords"];
		
		if(document.forms["search_form"]["rangeform1"].value.length>0){
			jsonObj["lower"]=document.forms["search_form"]["rangeform1"].value;
			arguObj = arguObj + "&lower="+jsonObj["lower"];
		}
		
		if(document.forms["search_form"]["rangeform2"].value.length>0){
			jsonObj["upper"]=document.forms["search_form"]["rangeform2"].value;
			arguObj = arguObj + "&upper="+jsonObj["upper"];
		}
		
		if (document.getElementById("new").checked){
			jsonObj["checknew"]=(document.getElementById("new").checked);
			arguObj = arguObj + "&checknew="+jsonObj["checknew"];
		}
		
		if (document.getElementById("new").checked){
			jsonObj["checkused"]=(document.getElementById("used").checked == true);
			arguObj = arguObj + "&checkused="+jsonObj["checkused"];
		}
		
		if (document.getElementById("verygood").checked){
			jsonObj["checkverygood"]=(document.getElementById("verygood").checked == true);
			arguObj = arguObj + "&checkverygood="+jsonObj["checkverygood"];
		}
		
		if (document.getElementById("good").checked){
			jsonObj["checkgood"]=(document.getElementById("good").checked == true);
			arguObj = arguObj + "&checkgood="+jsonObj["checkgood"];
		}
		
		if (document.getElementById("acceptable").checked){
			jsonObj["checkacceptable"]=(document.getElementById("acceptable").checked == true);
			arguObj = arguObj + "&checkacceptable="+jsonObj["checkacceptable"];
		}
		
		if (document.getElementById("return").checked){
			jsonObj["checkreturn"]=(document.getElementById("return").checked == true);
			arguObj = arguObj + "&checkreturn="+jsonObj["checkreturn"];
		}
		
		if (document.getElementById("free").checked){
			jsonObj["checkfree"]=(document.getElementById("free").checked == true);
			arguObj = arguObj + "&checkfree="+jsonObj["checkfree"];
		}
		
		if (document.getElementById("expedited").checked){
			jsonObj["checkexpedited"]=(document.getElementById("expedited").checked == true);
			arguObj = arguObj + "&checkexpedited="+jsonObj["checkexpedited"];
		}
		
		var selectbox=document.forms["search_form"]["selectbox"];
		var index=selectbox.selectedIndex;
		if(index == 0){
			jsonObj["selecteditem"]="BestMatch";
		}else if(index == 1){
			jsonObj["selecteditem"]="CurrentPriceHighest";
		}else if(index == 2){
			jsonObj["selecteditem"]="PricePlusShippingHighest";
		}else {
			jsonObj["selecteditem"]="PricePlusShippingLowest";
		}
		arguObj = arguObj + "&selecteditem="+jsonObj["selecteditem"];
		
		// console.log(arguObj);
		console.log(JSON.stringify(jsonObj));
		
		// fetch('https://csci571homeworks.wm.r.appspot.com/search', {
			// method: 'POST', // or 'PUT'
			mode: 'no-cors',
			// headers: {
				// 'Content-Type': 'application/json',
			// },
			
			// body: JSON.stringify(jsonObj),
		// })
		fetch("https://csci571homeworks.wm.r.appspot.com/search?"+arguObj)
		.then(response => {
			if (response.ok) {
				response.json().then(json => {
					//console.log(JSON.stringify(json));
					clearList();
					//jsondata = null;
					jsondata = JSON.parse(JSON.stringify(json));	
					addItems();
				});
			}else{
				clearList();
				alert("bad response status: "+response.status)
				console.log(response.status);
			}
		});
		return false;
	}
}

function checkPrice(){
	var lower=document.forms["search_form"]["rangeform1"].value;
	var upper=document.forms["search_form"]["rangeform2"].value;
	var keyword = (""+document.forms["search_form"]["keywords_input"].value).replace(/\@|\*|\=|\+|\(|\)|\{|\}|\[|\]|\!|\?|\<|\>|\#|\&|\$|\_|\/|\\|\||\.|\,|;|\:|:|\"|\'|\`|\~|\%|\^/g,"");
	if (lower<0.0 || upper<0.0) {
		alert("Price range values cannot be negative! Please try a value greater than or equal to 0.0.");
		return false;
	}
	if (parseFloat(lower)>parseFloat(upper)) {
		alert("Oops! Lower price limit cannot be greater than upper price limit! Please try again.");
		return false;
	}
	if(!keyword && keyword.length<1){
		alert("Invalid Keywords! Please try again.");
		return false;
	}
	return true;
}

function addItems(){
	var searchkey  = (""+document.forms["search_form"]["keywords_input"].value).replace(/\@|\*|\=|\+|\(|\)|\{|\}|\[|\]|\!|\?|\<|\>|\#|\&|\$|\_|\/|\\|\||\.|\,|;|\:|:|\"|\'|\`|\~|\%|\^/g,"");
	if(jsondata[0]["0"]["TotalResultsFound"]>0){
		addResult(jsondata[0],searchkey);
		displayHorLine();
		//console.log(jsondata);
		addItemstoList();
	}else{
		if("NoResult" in jsondata[1]["1"]){
			console.log(jsondata[1]["1"]["NoResult"]);
			addNoFound();
		}else{
			alert(jsondata[1]["1"]["Error"]);
		}	
	}
}

function displayHorLine(){
	var horLine = document.getElementById("horizontaline");
	horLine.style.display = "block";
}

function hidHorLine(){
	var horLine = document.getElementById("horizontaline");
	horLine.style.display = "none";
}

function addItemstoList(){
	if(jsondata.length>11){
		for(i=1;i<11;i++){
			loadItemInfo(jsondata[i][i+""],i);
		}
	}else{
		for(i=1;i<jsondata.length;i++){
			loadItemInfo(jsondata[i][i+""],i);
		}
	}
	
	var showml = document.getElementById("showml");
	if(jsondata.length>4){
		for(i=1;i<4;i++){
			//console.log(jsondata[i]);
			//loadItemInfo(jsondata[i][i+""],i);
			displayItemInfo(i);
		}
		showml.style.display = "block";
		showml.value = "Show More";
		showml.innerHTML = "Show More";
		if (showml.addEventListener) {
	  		showml.addEventListener("click",showmoreless);
		} else if (showml.attachEvent)  {
			showml.attachEvent("onclick",showmoreless);
		}
	}else{
		for(i=1;i<jsondata.length;i++){
			//console.log(window.jsondata[i]);
			//loadItemInfo(jsondata[i][i+""],i);
			displayItemInfo(i);
		}
	}
}

function showmoreless(){
	var showml = document.getElementById("showml");
	if(showmlcount == 1){
		showml.value = "Show More";
		showml.innerHTML = "Show More";
		for(i=10;i>3;i--){
			hideItemInfo(i)
		}
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
		showmlcount = 0;
	}else{
		showml.value = "Show Less";
		showml.innerHTML = "Show Less";
		for(i=4;i<11;i++){
			displayItemInfo(i);
		}
		showmlcount = 1;
	}
}

function loadItemInfo(itemData,sequence){
	//console.log(itemData);
	var ImageURL = itemData["ImageURL"];
    var Title = itemData["Title"];
    var Category = itemData["Category"];
    var Redirection = itemData["Redirection"];
    var Condition = itemData["Condition"];
    var Top = itemData["Top"];
    var Accepts = itemData["Accepts"];
    var FreeShipping = parseFloat(itemData["FreeShipping"]);
	//console.log(FreeShipping);
    var ExpeditedShipping = itemData["ExpeditedShipping"];
    var Price = parseFloat(itemData["Price"]);
    var Location = itemData["Location"];
	
	var itemsellerdiv = document.getElementById("itemsellerdiv"+sequence);
	var itemredcross = document.getElementById("itemredcross"+sequence);
	var itemshippingdiv = document.getElementById("itemshippingdiv"+sequence);
	var itempriceloca = document.getElementById("itempriceloca"+sequence);
	itemredcross.style.visibility = "hidden";
	itemsellerdiv.style.display = "none";
	itemshippingdiv.style.display = "none";
	itempriceloca.style.visibility = "hidden";	
	
	var itemimg = document.getElementById("itemimg"+sequence);
	itemimg.src = ImageURL;

	var itemtitle = document.getElementById("itemtitle"+sequence);
	itemtitle.value = Title;
	itemtitle.href = Redirection;
	itemtitle.target = "_blank";
	itemtitle.innerHTML = Title;
	
	var itemcategoryca = document.getElementById("itemcategoryca"+sequence);
	itemcategoryca.innerHTML = "Category: ";
	
	var itemcategoryco = document.getElementById("itemcategoryco"+sequence);
	//console.log(itemcategoryco);
	itemcategoryco.innerHTML = Category+" ";
	
	var itemcategoryre = document.getElementById("itemcategoryre"+sequence);
	itemcategoryre.onclick = function(){
		return window.open(Redirection);
	};
	itemcategoryre.src = "imgs/red.png";
	
	var itemconditioncon = document.getElementById("itemconditioncon"+sequence);
	itemconditioncon.innerHTML = "Condition: "+Condition;

	var itemconditiontop = document.getElementById("itemconditiontop"+sequence);
	itemconditiontop.src = "imgs/top.png";
	if(Top){
		itemconditiontop.style.visibility = "visible";
	}else{
		itemconditiontop.style.visibility = "hidden";
	}
	itemconditiontop.src = "imgs/top.png";
	
	var itemseller1 = document.getElementById("itemseller1"+sequence);
	itemseller1.innerHTML = "Seller ";
	
	var itemseller2 = document.getElementById("itemseller2"+sequence);
	if(Accepts){
		itemseller2.innerHTML = "accepts ";
	}else{
		itemseller2.innerHTML = "doesn't accept ";
	}

	var itemseller3 = document.getElementById("itemseller3"+sequence);
	itemseller3.innerHTML = "returns";
	
	var itemshipping1 = document.getElementById("itemshipping1"+sequence);
	if(FreeShipping>0.0){
		if(ExpeditedShipping){
			itemshipping1.innerHTML = "Free Shipping -- Expedited Shipping available";
		}else{
			itemshipping1.innerHTML = "Free Shipping ";
		}
	}else{
		if(ExpeditedShipping){
			itemshipping1.innerHTML = "No Free Shipping -- Expedited Shipping available";
		}else{
			itemshipping1.innerHTML = "No Free Shipping ";
		}
	}
	
	var itempricecon = document.getElementById("itempricecon"+sequence);
	if (FreeShipping>0.0){
		itempricecon.innerHTML = "Price: $"+Price+" (+ "+FreeShipping+" for shipping) ";
	}else{
		itempricecon.innerHTML = "Price: $"+Price+" ";
	}
	
	var itempriceloca = document.getElementById("itempriceloca"+sequence);
	itempriceloca.innerHTML = "From "+Location;
	
	newitemOnclick(sequence);
	
	redcrossOnclick(sequence);
	
	//imgHover(itemimg);
}

function displayItemInfo(sequence){
	var newitem = document.getElementById("newitem"+sequence);
	newitem.style.display = "flex";
}

function hideItemInfo(sequence){
	var newitem = document.getElementById("newitem"+sequence);
	newitem.style.display = "none";
}

//function imgHover(itemimg){
//	var originalWidth=0;
//	itemimg.onload = function(){
//		originalWidth = itemimg.width;
//		//console.log("aa",originalWidth);
//	};
//	var originalHeight=0;
//	itemimg.onload = function(){
//		originalHeight = itemimg.height;
//		//console.log("ab",originalHeight);
//	};
//	//console.log("aa",originalWidth);
//	var h_w = originalHeight*1.0/originalWidth;
//	if (itemimg.addEventListener) {
//  		itemimg.addEventListener("mouseover",function(){
//			var width = originalWidth;
//			var height = originalHeight;
//			var count = 0;
//			var timer = setInterval(function(){
//				count++;
//				itemimg.style.width = width+count+"px";
//				itemimg.style.height = height+count*h_w+"px";
//				console.log("mouseover",width);
//				if(width > 2*originalWidth){
//					clearInterval(timer);
//				}
//			},40);
//		});
//
//		itemimg.addEventListener("mouseout",function(){
//			var width = parseInt(itemimg.style.width);
//			var height = parseInt(itemimg.style.height);
//			var count = 0;
//			var timer = setInterval(function(){
//				count--;
//				itemimg.style.width = (width-count)+"px";
//				itemimg.style.height = (height-count*h_w)+"px";
//				console.log("mouseout",width);
//				if(width <= originalWidth){
//					clearInterval(timer);
//				}
//			},40);
//		});
//	} else if (itemimg.attachEvent)  {
//  		itemimg.attachEvent("onmouseover",function(){
//			var width = parseInt(itemimg.style.width);
//			var height = parseInt(itemimg.style.height);
//			var count = 0;
//			//console.log(width);
//			var timer = setInterval(function(){
//				count++;
//				itemimg.style.width = width+count+"px";
//				itemimg.style.height = height+count*h_w+"px";
//				if(width > 2*originalWidth){
//					clearInterval(timer);
//				}
//			},40);
//		});
//
//		itemimg.attachEvent("onmouseout",function(){
//			var width = parseInt(itemimg.style.width);
//			var height = parseInt(itemimg.style.height);
//			var count = 0;
//			//console.log(width);
//			var timer = setInterval(function(){
//				count--;
//				itemimg.style.width = (width-count)+"px";
//				itemimg.style.height = (height-count*h_w)+"px";
//				if(width <= originalWidth){
//					clearInterval(timer);
//				}
//			},40);
//		});
//	}
//}
//function scaleImg(){
//	//console.log(width);
//	var timer = setInterval(function(){
//		var maxW = parseInt(itemimg.style.maxWidth);
//		if (timerCount == 0){
//			if(maxW-15<91){
//				maxW = 90;
//			}else{
//				maxW=maxW-15;
//			}
//			itemimg.style.maxWidth = maxW+"px";
//			itemimg.style.maxHeight = maxW+"px";
//			if(width < 91){
//				clearInterval(timer);
//				itemimg.style.zIndex = "auto";
//			}
//		}else{
//			if(maxW+15>251){
//				maxW = 251;
//			}else{
//				maxW=maxW+15;
//			}
//			itemimg.style.maxWidth = maxW+"px";
//			itemimg.style.maxHeight = maxW+"px";
//			itemimg.style.zIndex = "50";
//			if(width > 251){
//				clearInterval(timer);
//			}
//		}
//	},40);
//}

function newitemOnclick(sequence){
	var outerinfo = document.getElementById("outerinfo"+sequence);
	var itemsellerdiv = document.getElementById("itemsellerdiv"+sequence);
	var itemredcross = document.getElementById("itemredcross"+sequence);
	var itemshippingdiv = document.getElementById("itemshippingdiv"+sequence);
	var itempriceloca = document.getElementById("itempriceloca"+sequence);
	var newitem = document.getElementById("newitem"+sequence);
	if (outerinfo.addEventListener) {
	  	outerinfo.addEventListener("click", function(){
			console.log(itemsellerdiv.style.display);
			if(itemsellerdiv.style.display=="none"&&itemredcross.style.visibility=="hidden"){
				itemredcross.style.visibility = "visible";
				itemsellerdiv.style.display = "block";
				itemshippingdiv.style.display = "block";
				itempriceloca.style.visibility = "visible";	
				newitem.style.maxHeight = "200px";
				newitem.style.height = "auto";
				return console.log("outerinfo click");
			}else{
				return console.log("outerinfo bad click");
			}
		});
	} else if (outerinfo.attachEvent)  {
		 outerinfo.attachEvent("onclick", function(){
			if(itemsellerdiv.style.display=="none"&&itemredcross.style.visibility=="hidden"){
				itemredcross.style.visibility = "visible";
				itemsellerdiv.style.display = "block";
				itemshippingdiv.style.display = "block";
				itempriceloca.style.visibility = "visible";		
				newitem.style.maxHeight = "200px";
				newitem.style.height = "auto";
				return console.log("outerinfo click");
			}else{
				return console.log("outerinfo bad click");
			}
		});
	}
}

function redcrossOnclick(sequence){
	var outerinfo = document.getElementById("outerinfo"+sequence);
	var itemsellerdiv = document.getElementById("itemsellerdiv"+sequence);
	var itemredcross = document.getElementById("itemredcross"+sequence);
	var itemshippingdiv = document.getElementById("itemshippingdiv"+sequence);
	var itempriceloca = document.getElementById("itempriceloca"+sequence);
	var newitem = document.getElementById("newitem"+sequence);
	if (itemredcross.addEventListener) {
	  	itemredcross.addEventListener("click", function(){
			if(itemsellerdiv.style.display=="none"&&itemredcross.style.visibility=="hidden"){
				return console.log("redcross bad click");
			}else{
				itemredcross.style.visibility = "hidden";
				itemsellerdiv.style.display = "none";
				itemshippingdiv.style.display = "none";
				itempriceloca.style.visibility = "hidden";
				newitem.style.maxHeight = "140px";
				newitem.style.height = "auto";
				return console.log("redcross click");
			}
		});
	} else if (itemredcross.attachEvent)  {
	  	itemredcross.attachEvent("onclick", function(){
			if(itemsellerdiv.style.display=="none"&&itemredcross.style.visibility=="hidden"){
				return console.log("redcross bad click");
			}else{
				itemredcross.style.visibility = "hidden";
				itemsellerdiv.style.display = "none";
				itemshippingdiv.style.display = "none";
				itempriceloca.style.visibility = "hidden";
				newitem.style.maxHeight = "140px";
				newitem.style.height = "auto";
				return console.log("redcross click");
			}
		});
	}
	
}

function addResult(recordjson,searchkey){
	var temprecord = recordjson["0"];
	var record = parseInt(temprecord["TotalResultsFound"]);
	//console.log("aa",record);
	var recorddiv = document.getElementById("resultsfound");
	var recordele = document.createElement('span');
	recordele.style.fontSize = "20px";
	recordele.style.fontWeight = "bold";
	recordele.innerHTML = record + " Results found for ";
	var searchname = document.createElement('span');
	searchname.style.fontStyle = "oblique";
	searchname.style.fontSize = "20px";
	searchname.style.fontWeight = "bold";
	searchname.innerHTML = searchkey;
	recorddiv.appendChild(recordele);
	recorddiv.appendChild(searchname);
}

function addNoFound(){
	var recordele = document.createElement('span');
	recordele.style.fontSize = "20px";
	recordele.style.fontWeight = "bold";
	recordele.innerHTML = "No Results found";
	document.getElementById("resultsfound").appendChild(recordele);
	for(i=1;i<11;i++){
		hideItemInfo(i);
	}
	document.getElementById("showml").style.display = "none";
	document.getElementById("showml").innerHTML = "";
}

function clearList(){
	jsondata = null;
	showmlcount = 0;
	document.getElementById("resultsfound").innerHTML = "";
	for(i=1;i<11;i++){
		hideItemInfo(i);
	}
	document.getElementById("showml").style.display = "none";
	document.getElementById("showml").innerHTML = "";
	document.getElementById("showml").value = "";
	document.getElementById("showml").removeEventListener("click",showmoreless);
	hidHorLine();
}

function clearForm(){
	document.forms["search_form"].reset();
	document.forms["search_form"]["selectbox"].selectedIndex = 0;
	clearList();
}

function windowtoebay(){
	return window.open('https://ebay.com')
}
