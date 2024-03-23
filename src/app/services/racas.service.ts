import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { racas } from '../Models/racas.model';
import { Observable, map, of, switchMap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RacasService {

  headerDog = new HttpHeaders({
    'x-api-key':'live_IzZ7UeqzEaR5xx26QoJPsLMSBEqKf68zw2skJpUC6XC88QpvZPbByrGlJWY9ddiN'
  });

  headerCat = new HttpHeaders({
    'x-api-key':'live_Sy68LIf4CTUMdfjF9dvuxO0PHQT4AGu1f0STj49SvsZcBOdE41RqVOCc75RU677N'
  });

  private urldog = environment.apidog;
  private urlcat = environment.apicat;

  constructor(private httpclient:HttpClient) { }

  obterRacasDogs(){
    return this.httpclient.get<racas[]>(this.urldog + '/v1/images/search?limit=20',{headers: this.headerDog})
  }

  getRacaDogDetails(id: string): Observable<any> {
    return this.httpclient.get<any>(this.urldog + `/v1/images/${id}`, { headers: this.headerDog }).pipe(
      map(response => {
        const raca = response.breeds[0];
        raca.url = response.url;
        return raca;
      })
    );
  }


  obterRacasPorNome(nome: string) {
    //return this.httpclient.get<racas[]>(this.urldog + `/v1/images/search?limit=20&breed_ids=${nome}`, { headers: this.headerDog });
    return this.httpclient.get<any[]>(this.urldog + `/v1/breeds`, {headers: this.headerDog}).pipe(
      switchMap((response)=>{
        const racas = response.filter(raca => raca.name.toLowerCase().includes(nome.toLowerCase()));
        if(racas.length > 0){
          const racasIds = racas.map(breed => breed.id);
          return this.httpclient.get<racas[]>(this.urldog + `/v1/images/search?limit=20&breed_ids=${racasIds.join(',')}`, {headers: this.headerDog});

        }else{
          return of([]);
        }
      })
    )
  }
  
  obterRacasGatos(){
    return this.httpclient.get<racas[]>(this.urlcat + '/v1/images/search?limit=20',{headers: this.headerCat})
  }

  getRacasCatDetails(id:string):Observable<any>{
    return this.httpclient.get<any>(this.urlcat + `/v1/images/${id}`, {headers:this.headerCat}).pipe(
      map(reponse =>{
        const gato = reponse.breeds[0];
        gato.url = reponse.url;
        return gato;
      })
    )
  }
  obterGatosPorNome(nome:string){
    return this.httpclient.get<racas[]>(this.urlcat + `/v1/images/search?limit=20&breed_ids=${nome}&include_breeds=true`, {headers: this.headerCat})
  }
}
