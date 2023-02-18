import { Component } from '@angular/core';
import { Categoria } from 'src/app/interfaces/Categoria';
import { ConexionService } from 'src/app/service/conexion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-eliminar-categoria',
  templateUrl: './eliminar-categoria.component.html',
  styleUrls: ['./eliminar-categoria.component.css']
})
export class EliminarCategoriaComponent {
  id:number = 0;
  categoria:Categoria={id_categoria:0, cat_nombre:"", cat_descripcion:""}

  constructor(private conexion: ConexionService, private router:Router, private route:ActivatedRoute){
    this.getParam();
    if (this.id>0){
      const dato: Observable<any> = this.conexion.leerApi('categorias/'+this.id);
      console.log(this.getParam());
      dato.subscribe(
        (resp: any) => {
          if(resp.status==200){
            this.categoria = resp.data as Categoria;
          }
        })
    }
  }

  getParam():void{
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit():void{
  }

  eliminar(): void{
    let obs: Observable<any> = this.conexion.deleteApi('categorias/'+this.id);
    obs.subscribe((resp: any) => {
      let stats: number = resp.status;
      if(stats == 200){
        console.log("Eliminado");
      }
    })
    this.router.navigateByUrl('categorias')
  }
}
