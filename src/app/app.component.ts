import { Component } from '@angular/core';
import { ConexionService } from './service/conexion.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tienda Incienso';
}
