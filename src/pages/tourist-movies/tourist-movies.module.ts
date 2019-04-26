import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TouristMoviesPage } from './tourist-movies';

@NgModule({
  declarations: [
    TouristMoviesPage,
  ],
  imports: [
    IonicPageModule.forChild(TouristMoviesPage),
  ],
})
export class TouristMoviesPageModule {}
