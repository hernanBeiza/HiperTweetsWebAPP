import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { TweetService }  from './../services/Tweet.service';

import { TweetModel } from './../models/TweetModel';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {
	public title = "TweetService";
	public tweetSubscription:  Subscription;
	public tuits:Array<TweetModel> = new Array<TweetModel>();

	constructor(private Location:Location, private TweetService:TweetService) {
		console.log("TweetsComponent");
	}

	ngOnInit() {
		console.log("TweetsComponent: ngOnInit();");
		this.tweetSubscription = this.TweetService.obtenerTweets().subscribe(data => {
			console.log(data);
			if(data.result){
				this.tuits = data.tuits;
			}
		},dataError => {
			console.error(dataError);
		})
    }
}
