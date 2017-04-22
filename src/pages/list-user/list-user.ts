import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserService } from '../service/user-service';
//import {Http, Headers, HTTP_PROVIDERS} from '@angular2/http';

@Component({
  selector: 'page-list-user',
  templateUrl: 'list-user.html',
  providers: [UserService, Http]
})

export class ListUser {

  users: Array<any>;

  constructor(public navCtrl: NavController, private userService: UserService) {
  	this.listUsers();
  }

  listUsers(){
  	this.userService.listUsers().subscribe(
		data => {
			this.users = data.results; 
			console.log(data);
		},
		err => {
			console.log(err);
		},
		() => console.log('User Search Complete')
	);
  }


}

