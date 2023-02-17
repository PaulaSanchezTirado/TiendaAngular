import { Component } from '@angular/core';
import { ConexionService } from 'src/app/service/conexion.service';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/interfaces/Categoria';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {

  listado :any[] = [];
  constructor(private conexion:ConexionService){
    const dato:Observable<any>=this.conexion.leerApi('categorias');// dato es un observable que va a observar leerApi, en este caso, categoria

    console.log("Entro en listado");
    dato.subscribe((resp:any)=>{ // La respuesta es any porque no se sabe lo que va a devolver
      let stat:number = resp.status;
      if (stat == 200){
        this.listado=resp.data as Categoria[];
        console.log(this.listado);
      } 
    })
  }
  
}
