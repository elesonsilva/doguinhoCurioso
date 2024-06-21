import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RacasService } from '../../services/racas.service';
@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
 

 constructor(private racasServices:RacasService){}

 
}
