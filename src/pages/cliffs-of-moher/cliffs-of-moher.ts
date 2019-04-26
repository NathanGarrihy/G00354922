import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage} from './../home/home';

@IonicPage()
@Component({
  selector: 'page-cliffs-of-moher',
  templateUrl: 'cliffs-of-moher.html',
})
export class CliffsOfMoherPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openHome() {
    this.navCtrl.push(HomePage);
  }

}
