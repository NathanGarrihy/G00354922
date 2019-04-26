import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WeatherProvider } from '../providers/weatherv1/weatherv1';
import { WeatherPage } from '../pages/weather/weather';
import { HttpClientModule } from '@angular/common/http';
import { AilweeCavePage } from '../pages/ailwee-cave/ailwee-cave';
import { BurrenPage } from '../pages/burren/burren';
import { CliffsOfMoherPage } from '../pages/cliffs-of-moher/cliffs-of-moher';
import { DoolinPage } from '../pages/doolin/doolin';
import { LahinchPage } from '../pages/lahinch/lahinch';
import { TouristMoviesPage } from '../pages/tourist-movies/tourist-movies';
import { MovieProvider } from '../providers/movie/movie';
import { IonicStorageModule } from '@ionic/storage';
import { StatusPage } from '../pages/status/status';


@NgModule({
  declarations: [
    MyApp,
    AilweeCavePage,
    BurrenPage,
    CliffsOfMoherPage,
    DoolinPage,
    LahinchPage,
    TouristMoviesPage,
    WeatherPage,
    StatusPage,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AilweeCavePage,
    BurrenPage,
    CliffsOfMoherPage,
    DoolinPage,
    LahinchPage,
    TouristMoviesPage,
    WeatherPage,
    StatusPage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WeatherProvider,
    MovieProvider
  ]
})
export class AppModule {}
