import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  titulo = 'practica Angular 16';

  saludar(nombre: string) {
    alert(nombre);
  }
}
