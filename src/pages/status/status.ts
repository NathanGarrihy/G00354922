import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {HomePage} from'./../home/home';

@IonicPage()
@Component({
  selector: 'page-status',
  templateUrl: 'status.html',
})
export class StatusPage {

  status:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatusPage');
  }
  
  openHome(){
    this.navCtrl.push(HomePage);
  }

  onSave(){
    this.storage.set("status", this.status);
    this.navCtrl.pop();
  }
}