import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage} from './../home/home';

@IonicPage()
@Component({
  selector: 'page-lahinch',
  templateUrl: 'lahinch.html',
})
export class LahinchPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LahinchPage');
  }

  openHome() {
    this.navCtrl.push(HomePage);
  }

}
