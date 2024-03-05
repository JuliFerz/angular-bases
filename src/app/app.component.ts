import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // componente principal que se construye la app
  templateUrl: './app.component.html', // indica el html a cargar
})
export class AppComponent {
  public title: string = 'Hola mundo';
}
