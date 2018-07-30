import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { Router } from '@angular/router';

import { TweetService }  from './services/Tweet.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
	public title = "hiperTweet";

	constructor() {
		console.log("AppComponent");
	}

	ngOnInit() {
		console.log("AppComponent: ngOnInit();");
    }

}