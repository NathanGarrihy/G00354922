import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage} from '@ionic/storage';

/**
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
export class FeedbackPage {

  status: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackPage');
  }
  saveRating() {
   console.log(this.status);
   this.storage.set("status", this.status);
   this.navCtrl.pop();
  }

}