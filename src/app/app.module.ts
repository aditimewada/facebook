import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './user.component';

import { FacebookModule } from 'ng2-facebook-sdk';
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {UserService} from './user.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import {User} from './user';
 import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
 
 


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FacebookModule.forRoot(),
  
  ],
  bootstrap: [AppComponent],
  providers: [
 UserService
  ]
})
export class AppModule { }
