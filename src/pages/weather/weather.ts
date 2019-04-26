import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weatherv1/weatherv1'

@IonicPage()
@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',
})
export class WeatherPage {
  weather:any = [];
  conditionImage:any [];
  conditionText:any [];
  townName:any= [];
  countyName:any = [];
  countryName:any = [];
  localTime:any = [];
  windMph:any = [];
  windKph:any = [];
  humidity:any = [];
  gustMph:any = [];
  gustKph:any = [];
  tempCel:any = [];
  tempFar:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private weatherProvider:WeatherProvider) {
  }

  ionViewDidLoad(){
    this.weatherProvider.getDoolinWeather().subscribe((data)=>{
        this.weather = data.current;

        this.conditionImage = data.current.condition.icon;

        this.conditionText = data.current.condition.text;

        this.townName= data.location.name;

        this.countyName = data.location.region;

        this.countryName = data.location.country;

        this.localTime = data.location.localtime;

        this.windMph = data.current.wind_mph;

        this.windKph = data.current.wind_kph;

        this.humidity = data.current.humidity;

        this.gustMph = data.current.gust_mph;

        this.gustKph = data.current.gust_kph;

        this.tempCel = data.current.temp_c;

        this.tempFar = data.current.temp_f;
    });
  }

}
