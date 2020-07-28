export class Searchform {
	public keywords: string;
	public MinPrice: number;
	public MaxPrice: number;
	public sortOrder: string;
	public checknew: boolean;
	public checkused: boolean;
	public checkverygood: boolean;
	public checkgood: boolean;
	public checkacceptable: boolean;
	public ReturnsAcceptedOnly: boolean;
	public FreeShippingOnly: boolean;
	public ExpeditedShippingType: boolean;
	constructor(){
		this.keywords = null;
		this.MinPrice = null;
		this.MaxPrice = null;
		this.sortOrder = null;
		this.checknew = null;
		this.checkused = null;
		this.checkverygood = null;
		this.checkgood = null;
		this.checkacceptable = null;
		this.ReturnsAcceptedOnly = null;
		this.FreeShippingOnly = null;
		this.ExpeditedShippingType = null;		
	}
}