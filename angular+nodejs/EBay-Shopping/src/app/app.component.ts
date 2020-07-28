import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Searchform } from './searchform';
import { SearchService } from './search.service';
import { Item } from './item';
import { HostListener }  from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [SearchService]
})
export class AppComponent {
	@ViewChild('keywordsdiv') keywordsdiv: ElementRef;
	@ViewChild('pricediv') pricediv: ElementRef;
	@ViewChild('resultdiv') resultdiv: ElementRef;
	@ViewChild('hrline') hrline: ElementRef;
	@ViewChild('resultlists') resultlists: ElementRef;
	@ViewChild('card1') temp: ElementRef;
	@ViewChild('printresultdiv') printresultdiv: ElementRef;
	
	title = 'EBay-Shopping';
	public searchform = new Searchform();
	items: Item[];
	page = 1;
	collectionSize = 100;
	pageSize = 5;
	isHidden: boolean[] = [];
	paginationMaxSize: number = 8;
	mat_lab_flag: boolean = false;
	sortOrder: string[] = ['BestMatch','CurrentPriceHighest','PricePlusShippingHighest','PricePlusShippingLowest'];
	sortOrderValue: string;
	
	constructor(private searchservice: SearchService){
		this.page = 1;
		this.collectionSize = 100;
		this.pageSize = 5;
		for(var i=0;i<5;i++){
			this.isHidden.push(false);
		}
		this.onResize();
		this.sortOrderValue=this.sortOrder[0];
	}
	
	@HostListener('window:resize')
	onResize() {
		console.log(window.innerWidth);
		if(window.innerWidth > 780 && window.innerWidth < 1050){
			this.paginationMaxSize = 5;
			this.mat_lab_flag = false;
		}else if(window.innerWidth > 1050){
			this.paginationMaxSize = 8;
			this.mat_lab_flag = false;
		}else if(window.innerWidth < 780){
			this.paginationMaxSize = 3;
			this.mat_lab_flag = true;
		}else{
			this.paginationMaxSize = 8;
			this.mat_lab_flag = false;
		}
	}
	
	searchSubmit():void {
		this.clearTips();
		this.clearItems();
		this.hidLists();
		if(this.checkSearchform()){
			console.log('checksuc');
			this.searchservice.searchItems(this.tidyParams()).subscribe(items => {
				this.items = items;
				console.log('error:'+this.items[0].error);
				if(this.items[0].error==null || this.items[0].error==undefined || this.items[0].error==''){
					// for(var itemtemp of items){
						// console.log(itemtemp.gift);
					// }
					for(var itemtemp of this.items){
						this.washData(itemtemp);
					}
					this.hideHr();
					this.printresultdiv.nativeElement.innerHTML = "Results for "+this.searchform.keywords;
					this.collectionSize = Number(this.items.length);
					console.log(this.items[0]);
					this.showLists();
				}else{
					this.showTip('result');
				}
			});
		}else{
			console.log('checkfai');
		}
	}
	
	washData(itemtemp):void {
		itemtemp.expeditedShipping = this.getBoolean(itemtemp.expeditedShipping);
		itemtemp.oneDayShippingAvailable = this.getBoolean(itemtemp.oneDayShippingAvailable);
		itemtemp.bestOfferEnabled = this.getBoolean(itemtemp.bestOfferEnabled);
		itemtemp.buyItNowAvailable = this.getBoolean(itemtemp.buyItNowAvailable);
		itemtemp.gift = this.getBoolean(itemtemp.gift);
	}
	
	getBoolean(value){
		if(value == 'true'){
			return true;
		}else{
			return false;
		}
	}
	
	clearSubmit():void {
		this.clearForm();
		this.clearTips();
		this.showHr();
		this.clearItems();
		this.hidLists();
	}
	
	onpagechange() {
		for(var i=0;i<5;i++){
			this.isHidden[i] = false;
		}
	}
	
	showHidDetail(event: any, i){
		if(this.isHidden[i]){
			event.target.innerHTML = "Show Details";
			this.isHidden[i] = false;
		}else{
			event.target.innerHTML = "Hide Details";
			this.isHidden[i] = true;
		}
	}
	
	clearForm(): void {
		this.searchform = new Searchform();
		this.sortOrderValue=this.sortOrder[0];
	}
	
	clearTips(): void {
		this.keywordsdiv.nativeElement.style.display = "none";
		this.pricediv.nativeElement.style.display = "none";
		this.resultdiv.nativeElement.style.display = "none";
	}
	
	showTip(key: string): void {
		if(key == 'keywords'){
			this.keywordsdiv.nativeElement.style.display = "block";
		}else if(key == 'price'){
			this.pricediv.nativeElement.style.display = "block";
		}else if(key == 'result'){
			this.resultdiv.nativeElement.style.display = "block";
		}
	}
	
	hideHr():void {
		this.hrline.nativeElement.style.display = "none";
	}
	
	showHr():void {
		this.hrline.nativeElement.style.display = "block";
	}
	
	clearItems(): void {
		this.items,length = 0;
		this.page = 1;
		this.collectionSize = 100;
		this.pageSize = 5;
		for(var i=0;i<100;i++){
			this.isHidden[i] = false;
		}
		this.mat_lab_flag = false;
	}
	
	hidLists(): void {
		this.resultlists.nativeElement.style.display = "none";
	}
	
	showLists(): void {
		this.resultlists.nativeElement.style.display = "block";
	}
	
	checkSearchform(): boolean {
		var tag = true;
		if(this.searchform.keywords == null || this.searchform.keywords == undefined || this.searchform.keywords == ''){
			this.showTip('keywords');
			tag = false;
		}
		if(this.searchform.MinPrice != null && this.searchform.MinPrice != undefined && this.searchform.MinPrice < 0){
			this.showTip('price');
			tag = false;
		}
		
		if(this.searchform.MaxPrice != null && this.searchform.MaxPrice != undefined && this.searchform.MaxPrice < 0){
			this.showTip('price');
			tag = false;
		}
		
		if(this.searchform.MinPrice != null && this.searchform.MinPrice != undefined &&
			this.searchform.MaxPrice != null && this.searchform.MaxPrice != undefined && 
		   (this.searchform.MinPrice < 0 || this.searchform.MaxPrice < 0 || this.searchform.MinPrice > this.searchform.MaxPrice)){
			this.showTip('price');
			tag = false;
		}
		return tag;
	}
	
	tidyParams(): string {
		var paramstring = '';
		paramstring += 'keywords=' + this.searchform.keywords;
		if(this.searchform.MinPrice != null && this.searchform.MinPrice != undefined){
			paramstring += '&MinPrice=' + this.searchform.MinPrice;
		}
		if(this.searchform.MaxPrice != null && this.searchform.MaxPrice != undefined){
			paramstring += '&MaxPrice=' + this.searchform.MaxPrice;
		}
		paramstring += '&sortOrder=' + this.sortOrderValue;
		if(this.searchform.checknew != null && this.searchform.checknew != undefined && this.searchform.checknew != false){
			paramstring += '&checknew=' + this.searchform.checknew;
		}
		if(this.searchform.checkused != null && this.searchform.checkused != undefined && this.searchform.checkused != false){
			paramstring += '&checkused=' + this.searchform.checkused;
		}
		if(this.searchform.checkverygood != null && this.searchform.checkverygood != undefined && this.searchform.checkverygood != false){
			paramstring += '&checkverygood=' + this.searchform.checkverygood;
		}
		if(this.searchform.checkgood != null && this.searchform.checkgood != undefined && this.searchform.checkgood != false){
			paramstring += '&checkgood=' + this.searchform.checkgood;
		}
		if(this.searchform.checkacceptable != null && this.searchform.checkacceptable != undefined && this.searchform.checkacceptable != false){
			paramstring += '&checkacceptable=' + this.searchform.checkacceptable;
		}
		if(this.searchform.ReturnsAcceptedOnly != null && this.searchform.ReturnsAcceptedOnly != undefined && this.searchform.ReturnsAcceptedOnly != false){
			paramstring += '&ReturnsAcceptedOnly=' + this.searchform.ReturnsAcceptedOnly;
		}
		if(this.searchform.FreeShippingOnly != null && this.searchform.FreeShippingOnly != undefined && this.searchform.FreeShippingOnly != false){
			paramstring += '&FreeShippingOnly=' + this.searchform.FreeShippingOnly;
		}
		if(this.searchform.ExpeditedShippingType != null && this.searchform.ExpeditedShippingType != undefined && this.searchform.ExpeditedShippingType != false){
			paramstring += '&ExpeditedShippingType=' + 'Expedited';
		}
		
		console.log(paramstring);
		return paramstring;
	}
}
