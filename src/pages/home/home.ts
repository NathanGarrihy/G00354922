import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AilweeCavePage } from './../ailwee-cave/ailwee-cave';
import { BurrenPage } from './../burren/burren';
import { CliffsOfMoherPage } from './../cliffs-of-moher/cliffs-of-moher';
import { DoolinPage } from './../doolin/doolin';
import { LahinchPage } from './../lahinch/lahinch';
import { TouristMoviesPage } from '../tourist-movies/tourist-movies'
import { WeatherPage } from '../weather/weather';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {

  }

    openAilweeCave() {
      this.navCtrl.push(AilweeCavePage);
    }

    openBurren() {
      this.navCtrl.push(BurrenPage);
    }

    openCliffs() {
      this.navCtrl.push(CliffsOfMoherPage);
    }

    openDoolin() {
      this.navCtrl.push(DoolinPage);
    }

    openLahinch() {
      this.navCtrl.push(LahinchPage);
    }

    openMovie() {
      this.navCtrl.push(TouristMoviesPage);
    }

    openWeather() {
      this.navCtrl.push(WeatherPage);
    }

    
  viewRating() {
    this.navCtrl.push('RatingPage');
  }

  
  }