import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavegadorComponent } from "./components/navegador/navegador.component";


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavegadorComponent
],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})
export class AppComponent {
 


}
