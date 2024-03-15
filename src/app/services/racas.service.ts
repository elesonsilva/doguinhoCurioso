import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { racas } from '../Models/racas.model';
@Injectable({
  providedIn: 'root'
})
export class RacasService {
  private url = environment.api

  constructor(private httpclient:HttpClient) { }

  obterRacas(){
    return this.httpclient.get<racas[]>(this.url + '/v1/images/search?limit=10')
  }
}
