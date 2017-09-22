import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';
import {User} from './user';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {resp} from './response';

@Injectable()
export class UserService {
  url = 'http://52.26.122.159:3000/api/v1/login';
  private Url =' http://52.26.122.159:3000/api/v1/group/groups';
  private respp = new resp;
  constructor (private http: Http){}
    
 getUser(): Observable<User[]>{
    return this.http.get(this.Url)
    .map(res => res.json());
  }


    addUser(user/*user:User*/)/*:Observable<User[]>*/{
       let text = "";
        let users = JSON.stringify(user);
        console.log("User data in json  ------->>> "+users);
     let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.url,users, options)
                   .map(this.extractData)
                   .catch(this.handleErrorObservable);
                  
                
    }

    private extractData(res: any){
    
	let body = res.json();
     this.respp = res._body;
    console.log('response status-------->>>>'+ JSON.stringify(body.name));

    console.log('api response-------->>>>'+body);
        return body || {} ;
       
    }
    private handleErrorObservable (error: Response | any) {
	console.error(error.message || error);
	 return Observable.throw(error.message || error);
    }

  
}






