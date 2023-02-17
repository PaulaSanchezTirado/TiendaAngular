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
  // listado :any[] = [];
  // constructor(private conexion:ConexionService){
  //   const dato:Observable<any>=this.conexion.leerApi('categorias');// dato es un observable que va a observar leerApi, en este caso, categoria

  //   console.log("Entro en listado");
  //   dato.subscribe((resp:any)=>{ // La respuesta es any porque no se sabe lo que va a devolver
  //     this.listado=resp;
  //     console.log(this.listado);
  //   })
  // }
}
