import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './componentes/body/categorias/categorias.component';
import { FormCategoriaComponent } from './componentes/body/form-categoria/form-categoria.component';
import { InicioComponent } from './componentes/header/inicio/inicio.component';

const routes: Routes = [
  {path: 'categorias', component:CategoriasComponent},
  {path: 'categorias/:id/:opc', component:FormCategoriaComponent},
  {path: 'inicio', component:InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
