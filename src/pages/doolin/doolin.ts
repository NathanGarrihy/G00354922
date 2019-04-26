import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage} from './../home/home';

@IonicPage()
@Component({
  selector: 'page-doolin',
  templateUrl: 'doolin.html',
})
export class DoolinPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoolinPage');
  }

  openHome() {
    this.navCtrl.push(HomePage);
  }

}
