import {Component, OnInit} from '@angular/core';
import {UserService} from './user.service';
import {Observable} from 'rxjs';
import {User} from './user';


@Component({
    selector: 'users',
    template: `
        <ul>
          <li *ngFor="let user of users">
          <h1>Hello</h1>
          <h3>{{user.name}}</h3>
          <p>{{user.id}}</p>
          </li>
        </ul>

  `,
  providers:[UserService]
})







export class HomeComponent{
   private users: User;
   errorMessage: String;
   userName: String;
   user = new User();
  constructor(private _userService: UserService) { 

    /* this._userService.getUser().subscribe(users => {
      this.users = users;
  })
  }*/
}
/*add(): void {
     this._userService.addUser(this.users)
	     .subscribe( data => this.userName = JSON.stringify(data),
     error => alert(error),
     () => console.log("Finished")
 );
} 
 /* onTestPost(){
 this._userService.postJSON()
 .subscribe(
     data => this.postData = JSON.stringify(data),
     error => alert(error),
     () => console.log("Finished")
 );*/
  }