import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-finalrating',
  templateUrl: 'finalrating.html',
})
export class FinalratingPage {

  info: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FinalratingPage');
  }

  openFeedback() {
    this.navCtrl.push('StatusPage');
  }

  ionViewWillEnter(){
    this.storage.get("status").then((val)=>{
      this.info= val;
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  
}
