import { Component } from '@angular/core';
import { RacasService } from '../../../services/racas.service';
import { racas } from '../../../Models/racas.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-cats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cats.component.html',
  styleUrl: './cats.component.scss'
})
export class CatsComponent {
 gatos$ = new Observable<racas[]>()

 constructor(private racasservice:RacasService){
  this.obterRacasGatosInicial();
 }

 obterRacasGatosInicial(){
  this.gatos$ = this.racasservice.obterRacasGatos();
 }
}
