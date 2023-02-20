import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/interfaces/Categoria';
import { ConexionService } from 'src/app/service/conexion.service';

@Component({
  selector: 'app-formulario-categoria',
  templateUrl: './formulario-categoria.component.html',
  styleUrls: ['./formulario-categoria.component.css']
})
export class FormularioCategoriaComponent {
  categoria:Categoria={id_categoria:0, cat_nombre:"", cat_descripcion:""}
  constructor(private conexion:ConexionService, private route:ActivatedRoute, private router:Router){}
  ngOnInit(){}

  insertar():void{
    let obs:Observable<any> = this.conexion.postApi('categorias', this.categoria);
    obs.subscribe((resp:any)=>{
        let stat:number = resp.status;
        if (stat==200){
          console.log("Insertado")
        }
      })
    this.router.navigateByUrl('categorias')
  }
}
