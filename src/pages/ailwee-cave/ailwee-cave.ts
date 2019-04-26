import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage} from './../home/home';

@IonicPage()
@Component({
  selector: 'page-ailwee-cave',
  templateUrl: 'ailwee-cave.html',
})
export class AilweeCavePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AilweeCavePage');
  }

  openHome() {
    this.navCtrl.push(HomePage);
  }
}
