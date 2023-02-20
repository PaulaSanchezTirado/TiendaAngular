import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/interfaces/Categoria';
import { ConexionService } from 'src/app/service/conexion.service';
import { Observable } from 'rxjs';

const opcion_modificar:string="Modificar";
const opcion_insertar:string="Añadir";
const opcion_eliminar:string="Eliminar";

@Component({
  selector: 'app-form-categoria',
  templateUrl: './form-categoria.component.html',
  styleUrls: ['./form-categoria.component.css']
})

export class FormCategoriaComponent {
  id:number=0;
  isReadOnly:boolean=false;
  opcion:string="";
  opc:string="";
  button:string="";

  categoria:Categoria={id_categoria:0, cat_nombre:"", cat_descripcion:""}

  constructor(private conexion: ConexionService, private router:Router, private route:ActivatedRoute){
    this.getParam();
    if (this.id>0){
      const obs:Observable<any>=this.conexion.leerApi('categorias/'+this.id)
      obs.subscribe((resp:any)=>{
        this.categoria=resp.data as Categoria
      })
      if (this.opc=="Modificar"){
        this.button = "Modificar";
        this.opcion = opcion_modificar;
        this.isReadOnly=false;
      }
      else if (this.opc=="Eliminar"){
        this.opcion = opcion_eliminar;
        this.button = "Eliminar";
        this.isReadOnly=true;
      }
    }
    else {
      this.opcion = opcion_insertar;
      this.button = "Añadir";
      this.isReadOnly=false;
    }
  }

  elegir(){
    switch(this.opcion){
      case opcion_modificar:this.modificar(); break;
      case opcion_eliminar:this.eliminar(); break;
      case opcion_insertar:this.insertar(); break;

    }
  }

  getParam(){
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.opc = String(this.route.snapshot.paramMap.get('opc'));
  }

  modificar(){
    let obs: Observable<any> = this.conexion.putApi('categorias', this.categoria);
    obs.subscribe((resp: any) => {
      this.router.navigateByUrl('categorias')
    })
  }

  eliminar(){
    let obs: Observable<any> = this.conexion.deleteApi('categorias/'+this.categoria.id_categoria);
    obs.subscribe((resp: any) => {
      this.router.navigateByUrl('categorias')
    })
  }

  insertar(){
    let obs:Observable<any> = this.conexion.postApi('categorias', this.categoria);
    obs.subscribe((resp:any)=>{
      this.router.navigateByUrl('categorias')
      })
  }
}


