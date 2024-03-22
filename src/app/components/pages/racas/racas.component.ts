import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { RacasService } from '../../../services/racas.service';
import { racas } from '../../../Models/racas.model';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-racas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './racas.component.html',
  styleUrl: './racas.component.scss'
})
export class RacasComponent {
  // racas: racas[]=[];
  racas$= new Observable<racas[]>(); 
  
   termodepesquisa: string = '';
  
  constructor(private racasServices:RacasService,
    private router:Router){
      //console.log(environment.api)
      this.obterRacasInicial();
    }
    
    obterRacasInicial(){
      // this.racasServices.obterRacas().subscribe(racas=> this.racas = racas)
      this.racas$ = this.racasServices.obterRacasDogs();
    }
    
    verDetalhe(id:string){
      this.router.navigate(['/dogs',id]);
    }

    pesquisar() {
      if (this.termodepesquisa.trim() !== '') {
        this.racas$ = this.racasServices.obterRacasPorNome(this.termodepesquisa);
      } else {
        this.obterRacasInicial();
      }
    }
  }
