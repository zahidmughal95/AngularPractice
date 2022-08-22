import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private url = 'https://localhost:7275/WeatherForecast';
   
  constructor(private httpClient: HttpClient) { }
  
  getGames(){
    return this.httpClient.get(this.url);
  }
  
}