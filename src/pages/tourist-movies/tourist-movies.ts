import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

@IonicPage()
@Component({
  selector: 'page-tourist-movies',
  templateUrl: 'tourist-movies.html',
})
export class TouristMoviesPage {
  movies:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private movieProvider:MovieProvider) {
  }

  ionViewDidLoad() {
    this.movieProvider.getFilmInfo().subscribe((data)=>{
      this.movies = data.Search;
    })
  }

}
