import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
  
export class UserService {  
    static get parameters() {
        return [[Http]];
    }
  
    constructor(private http:Http) {
         
    }
  
    listUsers() {
        var url = 'https://personaltrainerserver-morone.herokuapp.com/list_users';
        var response = this.http.get(url).map(res => res.json());
        return response;
    }
}