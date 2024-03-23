import { Component } from '@angular/core';
import { RacasService } from '../../../services/racas.service';
import { racas } from '../../../Models/racas.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-cats',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cats.component.html',
  styleUrl: './cats.component.scss'
})
export class CatsComponent {
 gatos$ = new Observable<racas[]>()

 gatoPesquisa : string =''
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

 pesquisar(){
    if(this.gatoPesquisa.trim() !==''){
      this.gatos$ = this.racasservice.obterGatosPorNome(this.gatoPesquisa);
    }else{
      this.obterRacasGatosInicial();
    }
 }
}
