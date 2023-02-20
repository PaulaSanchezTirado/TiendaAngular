import { Component } from '@angular/core';
import { ConexionService } from 'src/app/service/conexion.service';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/interfaces/Categoria';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {

  listado :any[] = [];
  constructor(private conexion:ConexionService, private router:Router){
    const dato:Observable<any>=this.conexion.leerApi('categorias');// dato es un observable que va a observar leerApi, en este caso, categoria
    dato.subscribe((resp:any)=>{ // La respuesta es any porque no se sabe lo que va a devolver
      this.listado=resp.data as Categoria[];
      }) 
    }
  }
