// Copyright 2017 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

// [START gae_node_request_example]
const express = require('express');
var cors = require('cors')
const app = express();
app.use(cors())
const fetch = require('node-fetch');

function handleRequestforsearch(data){
	var newdata = '';
	if (data.hasOwnProperty('keywords')){
		newdata+='OPERATION-NAME=findItemsAdvanced&SERVICE-VERSION=1.0.0'+
				 '&SECURITY-APPNAME=ZimingWa-csci571h-PRD-c2eb49443-53c96387'+
				 '&paginationInput.entriesPerPage=100'+
				 '&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&keywords='+data.keywords;
	}else{
		return null;
	}
	if (data.hasOwnProperty('sortOrder')){
		newdata+='&sortOrder='+data.sortOrder;
	}
	var itemNum = 0;
	if (data.hasOwnProperty('MinPrice')){
		newdata+='&itemFilter('+itemNum+').name=MinPrice&itemFilter('+itemNum+').value='+
				 parseFloat(data.MinPrice)+
				 '&itemFilter('+itemNum+').paramName=Currency&itemFilter('+itemNum+').paramValue=USD';
		itemNum++;
	}
	if (data.hasOwnProperty('MaxPrice')){
		newdata+='&itemFilter('+itemNum+').name=MaxPrice&itemFilter('+itemNum+').value='+
				 parseFloat(data.MaxPrice)+
				 '&itemFilter('+itemNum+').paramName=Currency&itemFilter('+itemNum+').paramValue=USD';
		itemNum++;
	}
	if (data.hasOwnProperty('ReturnsAcceptedOnly')){
		newdata+='&itemFilter('+itemNum+').name=ReturnsAcceptedOnly&itemFilter('+itemNum+').value='+
				 data.ReturnsAcceptedOnly;
		itemNum++;
	}
	if (data.hasOwnProperty('FreeShippingOnly')){
		newdata+='&itemFilter('+itemNum+').name=FreeShippingOnly&itemFilter('+itemNum+').value='+
				 data.FreeShippingOnly;
		itemNum++;
	}
	if (data.hasOwnProperty('ExpeditedShippingType')){
		newdata+='&itemFilter('+itemNum+').name=ExpeditedShippingType&itemFilter('+itemNum+').value='+
				 data.ExpeditedShippingType;
		itemNum++;
	}
	var condition = [];
	if (data.hasOwnProperty('checknew')){
		condition.push(1000);
	}
	if (data.hasOwnProperty('checkused')){
		condition.push(3000);
	}
	if (data.hasOwnProperty('checkverygood')){
		condition.push(4000);
	}
	if (data.hasOwnProperty('checkgood')){
		condition.push(5000);
	}
	if (data.hasOwnProperty('checkacceptable')){
		condition.push(6000);
	}
	
	if(condition.length>0){
		newdata+='&itemFilter('+itemNum+').name=Condition';
		for(var i=0;i<condition.length;i++){
			newdata+='&itemFilter('+itemNum+').value('+i+')='+condition[i];
		}
		itemNum++;
	}
	
	return newdata;
}

function getEBayDataforsearch(data,res){
	fetch('https://svcs.ebay.com/services/search/FindingService/v1?'+data)
		.then(response => {
			if (response.ok) {
				response.json().then(json => {
					var newdata = [];
					// console.log(JSON.stringify(json));
					var jsondata = JSON.parse(JSON.stringify(json));
					if(json.findItemsAdvancedResponse[0].searchResult[0].item){
						var itemsdata = json.findItemsAdvancedResponse[0].searchResult[0].item;
						for(var i=0;i<itemsdata.length;i++){
							var tempItem = itemsdata[i];
							try{
								tempItem.title;
								tempItem.sellingStatus[0].currentPrice[0].__value__;
								tempItem.location[0];
								tempItem.primaryCategory[0].categoryName[0];
								tempItem.condition[0].conditionDisplayName[0];
								tempItem.shippingInfo[0].shippingType[0];
								tempItem.shippingInfo[0].shippingServiceCost[0].__value__;
								tempItem.shippingInfo[0].shipToLocations[0];
								tempItem.shippingInfo[0].expeditedShipping[0];
								tempItem.shippingInfo[0].oneDayShippingAvailable[0];
								tempItem.listingInfo[0].bestOfferEnabled[0];
								tempItem.listingInfo[0].buyItNowAvailable[0];
								tempItem.listingInfo[0].listingType[0];
								tempItem.listingInfo[0].gift[0];
								tempItem.listingInfo[0].watchCount[0];
								tempItem.viewItemURL[0];
							}
							catch(err){
								// console.log(err.message);
								continue;
							}
							var tempdata = {};
							tempdata['title'] = tempItem.title.toString();
							tempdata['itemId'] = tempItem.itemId[0].toString();
							tempdata['price'] = parseFloat(tempItem.sellingStatus[0].currentPrice[0].__value__);
							tempdata['location'] = tempItem.location.toString();
							tempdata['categoryName'] = tempItem.primaryCategory[0].categoryName.toString();
							tempdata['condition'] = tempItem.condition[0].conditionDisplayName.toString();
							tempdata['shippingType'] = tempItem.shippingInfo[0].shippingType.toString();
							tempdata['shippingServiceCost'] = tempItem.shippingInfo[0].shippingServiceCost[0].__value__.toString();
							tempdata['shipToLocations'] = tempItem.shippingInfo[0].shipToLocations.toString();
							tempdata['expeditedShipping'] = tempItem.shippingInfo[0].expeditedShipping;
							tempdata['oneDayShippingAvailable'] = tempItem.shippingInfo[0].oneDayShippingAvailable;
							tempdata['bestOfferEnabled'] = tempItem.listingInfo[0].bestOfferEnabled;
							tempdata['buyItNowAvailable'] = tempItem.listingInfo[0].buyItNowAvailable;
							tempdata['listingType'] = tempItem.listingInfo[0].listingType.toString();
							tempdata['gift'] = tempItem.listingInfo[0].gift;
							tempdata['watchCount'] = tempItem.listingInfo[0].watchCount[0].toString();
							if(tempItem.galleryURL == null || tempItem.galleryURL == undefined){
								tempdata['galleryURL'] = '../../assets/ebayDefault.png';
							}else{
								tempdata['galleryURL'] = tempItem.galleryURL;
							}
							tempdata['viewItemURL'] = tempItem.viewItemURL.toString();
							newdata.push(tempdata);
						}
					}else{
						newdata = [];
					}
					console.log('datalength: '+newdata.length);
					if(newdata.length>0){
						res.status(200).send(JSON.stringify(newdata)).end();
					}else{
						res.status(200).send(JSON.stringify([{'error':'no data'}])).end();
					}
				});
			}else{
				console.log(response.status);
				res.status(200).send(JSON.stringify([{'error':'connect ebay failed'}])).end();
			}
		}).catch((error)=>{
			console.log(error);
			res.status(200).send(JSON.stringify([{'error':error}])).end();
		});
}

function handleRequestforitemlist(data){
	var newdata = '';
	if (data.hasOwnProperty('keywords')){
		newdata+='OPERATION-NAME=findItemsAdvanced&SERVICE-VERSION=1.0.0'+
				 '&SECURITY-APPNAME=ZimingWa-csci571h-PRD-c2eb49443-53c96387'+
				 '&paginationInput.entriesPerPage=100'+
				 '&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&keywords='+data.keywords;
	}else{
		return null;
	}
	if (data.hasOwnProperty('sortOrder')){
		newdata+='&sortOrder='+data.sortOrder;
	}
	var itemNum = 0;
	if (data.hasOwnProperty('MinPrice')){
		newdata+='&itemFilter('+itemNum+').name=MinPrice&itemFilter('+itemNum+').value='+
				 parseFloat(data.MinPrice)+
				 '&itemFilter('+itemNum+').paramName=Currency&itemFilter('+itemNum+').paramValue=USD';
		itemNum++;
	}
	if (data.hasOwnProperty('MaxPrice')){
		newdata+='&itemFilter('+itemNum+').name=MaxPrice&itemFilter('+itemNum+').value='+
				 parseFloat(data.MaxPrice)+
				 '&itemFilter('+itemNum+').paramName=Currency&itemFilter('+itemNum+').paramValue=USD';
		itemNum++;
	}
	if (data.hasOwnProperty('ReturnsAcceptedOnly')){
		newdata+='&itemFilter('+itemNum+').name=ReturnsAcceptedOnly&itemFilter('+itemNum+').value='+
				 data.ReturnsAcceptedOnly;
		itemNum++;
	}
	if (data.hasOwnProperty('FreeShippingOnly')){
		newdata+='&itemFilter('+itemNum+').name=FreeShippingOnly&itemFilter('+itemNum+').value='+
				 data.FreeShippingOnly;
		itemNum++;
	}
	if (data.hasOwnProperty('ExpeditedShippingType')){
		newdata+='&itemFilter('+itemNum+').name=ExpeditedShippingType&itemFilter('+itemNum+').value='+
				 data.ExpeditedShippingType;
		itemNum++;
	}
	var condition = [];
	if (data.hasOwnProperty('checknew')){
		condition.push('New');
	}
	if (data.hasOwnProperty('checkused')){
		condition.push('Used');
	}
	if (data.hasOwnProperty('checkverygood')){
		condition.push(4000);
	}
	if (data.hasOwnProperty('checkgood')){
		condition.push(5000);
	}
	if (data.hasOwnProperty('checkacceptable')){
		condition.push(6000);
	}
	if (data.hasOwnProperty('checkunspecified')){
		condition.push('Unspecified');
	}
	if(condition.length>0){
		newdata+='&itemFilter('+itemNum+').name=Condition';
		for(var i=0;i<condition.length;i++){
			newdata+='&itemFilter('+itemNum+').value('+i+')='+condition[i];
		}
		itemNum++;
	}
	
	return newdata;
}

function getEBayDataforitemlist(data,res){
	fetch('https://svcs.ebay.com/services/search/FindingService/v1?'+data)
		.then(response => {
			if (response.ok) {
				response.json().then(json => {
					var newdata = [];
					//console.log(JSON.stringify(json));
					var jsondata = JSON.parse(JSON.stringify(json));
					if(json.findItemsAdvancedResponse[0].searchResult[0].item){
						var itemsdata = json.findItemsAdvancedResponse[0].searchResult[0].item;
						for(var i=0;i<itemsdata.length;i++){
							var tempItem = itemsdata[i];
							try{
								tempItem.title;
								tempItem.itemId[0];
								tempItem.sellingStatus[0].currentPrice[0].__value__;
								tempItem.condition[0].conditionDisplayName[0];
								tempItem.viewItemURL;
								tempItem.shippingInfo[0];
							}
							catch(err){
								// console.log(err.message);
								continue;
							}							
							var tempdata = {};
							tempdata['title'] = tempItem.title.toString();
							tempdata['itemId'] = tempItem.itemId[0].toString();
							tempdata['price'] = parseFloat(tempItem.sellingStatus[0].currentPrice[0].__value__);
							tempdata['condition'] = tempItem.condition[0].conditionDisplayName.toString();
							if(tempItem.shippingInfo[0].hasOwnProperty('shippingServiceCost')){
								tempdata['shippingServiceCost'] = tempItem.shippingInfo[0].shippingServiceCost[0].__value__.toString();
							}else{
								tempdata['shippingServiceCost'] = 0;
							}
							if(tempItem.galleryURL == null || tempItem.galleryURL == undefined){
								tempdata['galleryURL'] = '../../assets/ebayDefault.png';
							}else{
								tempdata['galleryURL'] = tempItem.galleryURL;
							}
							tempdata['viewItemURL'] = tempItem.viewItemURL.toString();
							
							tempdata['shippingInfo'] = tempItem.shippingInfo[0];
							
							if(tempItem.hasOwnProperty('topRatedListing')){
								var istrueof = (tempItem.topRatedListing[0]=='true')
								if(istrueof){
									tempdata['topRatedListing'] = tempItem.topRatedListing[0];
								}
							}
							
							newdata.push(tempdata);
						}
					}else{
						newdata = [];
					}
					console.log('datalength: '+newdata.length);
					if(newdata.length>0){
						res.status(200).send(JSON.stringify(newdata)).end();
					}else{
						res.status(200).send(JSON.stringify([{'error':'no data'}])).end();
					}
				});
			}else{
				console.log(response.status);
				res.status(200).send(JSON.stringify([{'error':'connect ebay failed'}])).end();
			}
		});
}

function handleRequestforitemdetail(data){
	var newdata = '';
	if (data.hasOwnProperty('productID')){
		newdata+='callname=GetSingleItem&responseencoding=JSON&appid=ZimingWa-csci571h-PRD-c2eb49443-53c96387&siteid=0&version=967&ItemID='+data.productID+'&IncludeSelector=Description,Details,ItemSpecifics';
	}else{
		return null;
	}
	
	return newdata;
}

function getEBayDataforitemdetail(data,res){
	fetch('http://open.api.ebay.com/shopping?'+data)
		.then(response => {
			if (response.ok) {
				response.json().then(json => {
					var newdata = {};
					//console.log(JSON.stringify(json));
					var jsondata = JSON.parse(JSON.stringify(json));
					// console.log(jsondata);
					if(jsondata.Item){
						// console.log(jsondata.Item);
						var itemsdata = jsondata.Item;
						if(itemsdata.hasOwnProperty('ItemSpecifics')&&itemsdata.ItemSpecifics.hasOwnProperty('NameValueList')){
							// console.log(itemsdata.ItemSpecifics.NameValueList);
							var temparray = {};
							for(var i=0;i<itemsdata.ItemSpecifics.NameValueList.length;i++){
								var namevalue=itemsdata.ItemSpecifics.NameValueList[i];
								// console.log(namevalue);
								if(namevalue.hasOwnProperty('Name') && namevalue.hasOwnProperty('Value') && namevalue.Name=='Brand'){
									newdata['Brand'] = namevalue.Value;
									continue;
								}else if(namevalue.hasOwnProperty('Name') && namevalue.hasOwnProperty('Value') && namevalue.Name!='Brand'){
									temparray[namevalue.Name] = namevalue.Value;
								}else{
									continue;
								}
							}
							if(temparray!=null && temparray != undefined && (JSON.stringify(temparray)!="{}")){
								newdata['ItemSpecifics'] = temparray;
							}
						}
						if(itemsdata.hasOwnProperty('Seller')){
							// console.log(itemsdata.Seller);
							
							newdata['Seller'] = itemsdata.Seller;
							
						}
						if(itemsdata.hasOwnProperty('ItemID')){
							// console.log(itemsdata.Seller);
							
							newdata['ItemID'] = itemsdata.ItemID;
							
						}
						if(itemsdata.hasOwnProperty('Subtitle')){
							// console.log(itemsdata.Subtitle);
							newdata['Subtitle']=itemsdata.Subtitle.toString();
						}
						if(itemsdata.hasOwnProperty('ReturnPolicy')){
							// console.log(itemsdata.ReturnPolicy);
							newdata['ReturnPolicy'] = itemsdata.ReturnPolicy;
						}
						if(itemsdata.hasOwnProperty('PictureURL')){
							// console.log(itemsdata.ReturnPolicy);
							newdata['PictureURL'] = itemsdata.PictureURL;
						}
					}else{
						// console.log(jsondata.Item);
						newdata = {};
					}
					// console.log(newdata);
					// console.log('datalength: '+newdata.length);
					if(newdata!=null && newdata != undefined && (JSON.stringify(newdata)!="{}")){
						res.status(200).send(JSON.stringify(newdata)).end();
					}else{
						res.status(200).send(JSON.stringify({'error':'no data'})).end();
					}
				});
			}else{
				console.log(response.status);
				res.status(200).send(JSON.stringify({'error':'connect ebay failed'})).end();
			}
		});
}

app.get('/', (req, res) => {
	var data = handleRequestforsearch(req.query);
	console.log(data);
	if(data == null){
		res.status(200).send(JSON.stringify([{'error':'no data'}])).end();
	}else{
		getEBayDataforsearch(data,res);
	}
});

app.get('/search', (req, res) => {
	var data = handleRequestforsearch(req.query);
	console.log(data);
	if(data == null){
		res.status(200).send(JSON.stringify([{'error':'no data'}])).end();
	}else{
		getEBayDataforsearch(data,res);
	}
});

app.get('/itemlist', (req, res) => {
	var data = handleRequestforitemlist(req.query);
	console.log(data);
	if(data == null){
		res.status(200).send(JSON.stringify([{'error':'no data'}])).end();
	}else{
		getEBayDataforitemlist(data,res);
	}
});

app.get('/itemdetail', (req, res) => {
	var data = handleRequestforitemdetail(req.query);
	//console.log(data);
	if(data == null){
		res.status(200).send(JSON.stringify({'error':'no data'})).end();
	}else{
		getEBayDataforitemdetail(data,res);
	}
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
// [END gae_node_request_example]

module.exports = app;
