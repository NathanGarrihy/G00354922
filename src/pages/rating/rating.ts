import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from'../home/home';
import { StatusPage } from '../status/status'

@IonicPage()
@Component({
  selector: 'page-rating',
  templateUrl: 'rating.html',
})
export class RatingPage {

  rate:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage:Storage) {
  }

  openStatusPage(){
    this.navCtrl.push(StatusPage);
  }

  openHome(){
    this.navCtrl.push(HomePage);
  }

  ionViewWillEnter() {
    this.storage.get("status").then((data) => {
      this.rate=data;
  
  }).catch((err)=>{
    console.log(err);
  })


 
}

 
}
