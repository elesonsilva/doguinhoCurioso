import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { RacasService } from '../../../services/racas.service';
import { racas } from '../../../Models/racas.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-racas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './racas.component.html',
  styleUrl: './racas.component.scss'
})
export class RacasComponent {
  racas: racas[]=[];

  constructor(private racasServices:RacasService){
    //console.log(environment.api)
    this.obterRacasInicial();
  }

  obterRacasInicial(){
    this.racasServices.obterRacas().subscribe(racas=> this.racas = racas)
  }
}
