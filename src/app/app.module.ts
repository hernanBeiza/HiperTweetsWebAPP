import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

import { TweetService } from './services/Tweet.service';
import { TweetsComponent } from './tweets/tweets.component';


@NgModule({
  declarations: [
    AppComponent,
    TweetsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
	  TweetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }