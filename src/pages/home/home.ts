import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Keyboard } from '@ionic-native/keyboard';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public keyboard: Keyboard) {
  }

  closeKeyboard(){ 
    this.keyboard.close
  }

  getItems(ev: any) {

  }

  searchByKeyword(ev: any) {
    // Reset items back to all of the items

    this.keyboard.close();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {

      
    }
  }

}
