import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WeatherProvider {

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
  }

  getDoolinWeather():Observable<any>{
    //  Link for api which points to co-ordanites of Cliffs of Moher (most popular tourist destination of County Clare)
    return this.http.get('http://api.apixu.com/v1/current.json?key=3a1385634ea148c0b5b175621192204&q=Doolin');
  }
}
 