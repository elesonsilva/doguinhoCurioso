import { Component } from '@angular/core';
import { RacasService } from '../../../services/racas.service';
import { racas } from '../../../Models/racas.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CarregadorCatComponent } from '../../carregador-cat/carregador-cat.component';
@Component({
  selector: 'app-cats',
  standalone: true,
  imports: [CommonModule, FormsModule, CarregadorCatComponent],
  templateUrl: './cats.component.html',
  styleUrl: './cats.component.scss'
})
export class CatsComponent {
 gatos$ = new Observable<racas[]>()
 carregandopagina: boolean =true;
 gatoPesquisa : string =''
 constructor(private racasservice:RacasService,
            private router:Router){
  this.obterRacasGatosInicial();
 }

 obterRacasGatosInicial(){
  this.carregandopagina = true
  this.gatos$ = this.racasservice.obterRacasGatos();
  this.gatos$.subscribe(()=>{
    this.carregandopagina=false;
  })
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
