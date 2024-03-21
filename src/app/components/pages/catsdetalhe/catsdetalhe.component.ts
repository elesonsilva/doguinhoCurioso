import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RacasService } from '../../../services/racas.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-catsdetalhe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catsdetalhe.component.html',
  styleUrl: './catsdetalhe.component.scss'
})
export class CatsdetalheComponent implements OnInit {
  gatoId!: string|null;
  gato: any;

  constructor(private route: ActivatedRoute,
              private racasservice:RacasService){}
      
    ngOnInit(): void {
      this.route.paramMap.subscribe(params =>{
        this.gatoId = params.get('id');
        this.getRacaDetails(this.gatoId!);
      });
    }

    getRacaDetails(id:string):void{
        this.racasservice.getRacasCatDetails(id).subscribe(data =>{
          this.gato = data;
        });
    }
}
