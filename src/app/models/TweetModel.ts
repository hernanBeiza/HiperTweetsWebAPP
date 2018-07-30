export class TweetModel { 
	
	public idtweet?: number;
	public mensaje?: string;	
	public usuario?: string;	
	public valid?: number;	

	constructor(idtweet?:number,mensaje?:string, usuario?:string,valid?:number){
		this.idtweet = idtweet;
		this.mensaje = mensaje;
		this.usuario = usuario;
		this.valid = valid;
	}
	
}