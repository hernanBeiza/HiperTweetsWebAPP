import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { TweetModel } from './../models/TweetModel';
import { environment } from './../../environments/environment';

@Injectable()
export class TweetService {

  constructor(private http: Http) { 
    console.log("TweetService")
  }

  public obtenerToken(): Observable <any> {
    console.info("Tweet.service.ts: obtenerToken();");
    //https://api.twitter.com/1.1/search/tweets.json?q=%23hiperactivo
    var url = "";
    console.log(url);

    let headers = this.getHeader();
    let apiKEY:string = "";
    let apiSECRETKEY:string = "";
    headers.append("Authorization", "Basic " + btoa(apiKEY+":"+apiSECRETKEY));
    //console.log(headers);

    let postParams = {grant_type:"client_credentials"};
    let httpOptions = {
      withCredentials: true,
      headers:headers
    };

    return this.http.post(url,postParams,httpOptions).pipe(map(res => {
      console.log(res);
      //Guardar el token en db local y ocuparlo enle resto de peticiones
      var respuesta =  {};
      return respuesta;
      }
    ));

  }

  public obtenerTweets(): Observable<any> {
    console.info("Tweet.service.ts: obtenerTweets();");
    //tweets definidos por servidor
    console.log(environment);
    var url = environment.API+"tweets";
    console.log(url);

    let httpOptions = {
      withCredentials: true,
      headers:this.getHeader()
    };

    return this.http.get(url,httpOptions).pipe(map(res => {
      //console.log(res);
      let data:any = res.json();
      //console.log(data);

      if(data.result){
        var tuits = new Array<TweetModel>();
        for (var i = 0; i < data.tweets.length; ++i) {
          let tuit = data.tweets[i];
          var model:TweetModel = new TweetModel();
          model.idtweet = tuit.id;
          model.mensaje = tuit.mensaje;
          model.usuario = tuit.usuario;
          //console.log(model);
          tuits.push(model);
        }
        var respuesta:any =  {result:data.result,tuits:tuits};      
      } else {
        var respuesta:any =  {result:data.result,tuits:null};      
      }
      return respuesta;
      }
    ));

  }

  private getHeader(): Headers {
    var logueado = false;
    let headers = new Headers({});
    //headers.append('Content-Type', 'application/json');
    //headers.append("Access-Control-Allow-Origin","http://0.0.0.0:4200/");
    //console.log(headers);
    return headers;
  }
  
}