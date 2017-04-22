import { Component } from '@angular/core';

import { ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-register-user',
  templateUrl: 'register-user.html'
})
export class RegisterUser {
  constructor(public actionSheetCtrl: ActionSheetController) {

  }
}
