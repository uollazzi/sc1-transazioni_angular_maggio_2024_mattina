import { Component } from '@angular/core';
import { Transazione } from './models/transazione';
import { TRANSAZIONI } from './data/transazioni';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sc1-transazioni';
  dati: Transazione[] = TRANSAZIONI;
}
