import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RacasService } from '../../../services/racas.service';
import { Observable } from 'rxjs';
import { racas } from '../../../Models/racas.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-dogdetalhes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dogdetalhes.component.html',
  styleUrl: './dogdetalhes.component.scss'
})

export class DogdetalhesComponent implements OnInit {
  racaId!: string|null;
  raca: any; 

  constructor(private route: ActivatedRoute, private racasService: RacasService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.racaId = params.get('id');
      this.getRacaDetails(this.racaId!);
    });
  }

  getRacaDetails(id: string): void {
    this.racasService.getRacaDogDetails(id).subscribe(data => {
      this.raca = data;
    });
  }
}
