import { Component, Input } from '@angular/core';
import { Transazione } from '../../models/transazione';

@Component({
  selector: 'app-transazioni-list',
  templateUrl: './transazioni-list.component.html',
  styleUrl: './transazioni-list.component.css'
})
export class TransazioniListComponent {
  @Input()
  transazioni: Transazione[] = [];
}
