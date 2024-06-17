import { Component, Input } from '@angular/core';
import { Transazione } from '../../models/transazione';

@Component({
  selector: 'app-transazione-detail',
  templateUrl: './transazione-detail.component.html',
  styleUrl: './transazione-detail.component.css'
})
export class TransazioneDetailComponent {
  @Input()
  transazione?: Transazione;
}
