import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage} from './../home/home';

@IonicPage()
@Component({
  selector: 'page-burren',
  templateUrl: 'burren.html',
})
export class BurrenPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BurrenPage');
  }

  openHome() {
    this.navCtrl.push(HomePage);
  }
}
