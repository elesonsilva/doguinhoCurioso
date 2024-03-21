import { Component } from '@angular/core';
import { RacasService } from '../../../services/racas.service';
import { racas } from '../../../Models/racas.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cats.component.html',
  styleUrl: './cats.component.scss'
})
export class CatsComponent {
 gatos$ = new Observable<racas[]>()

 constructor(private racasservice:RacasService,
            private router:Router){
  this.obterRacasGatosInicial();
 }

 obterRacasGatosInicial(){
  this.gatos$ = this.racasservice.obterRacasGatos();
 }

 verdetalhe(id: string){
  this.router.navigate(['/cats',id])
 }
}
