import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { racas } from '../Models/racas.model';
@Injectable({
  providedIn: 'root'
})
export class RacasService {

  header = new HttpHeaders({
    'x-api-key':'live_IzZ7UeqzEaR5xx26QoJPsLMSBEqKf68zw2skJpUC6XC88QpvZPbByrGlJWY9ddiN'
  });

  private url = environment.api

  constructor(private httpclient:HttpClient) { }

  obterRacas(){
    return this.httpclient.get<racas[]>(this.url + '/v1/images/search?limit=20',{headers: this.header})
  }
}
