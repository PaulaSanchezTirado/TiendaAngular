import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './componentes/body/categorias/categorias.component';
import { EditarCategoriaComponent } from './componentes/body/editar-categoria/editar-categoria.component';
import { EliminarCategoriaComponent } from './componentes/body/eliminar-categoria/eliminar-categoria.component';
import { FormularioCategoriaComponent } from './componentes/body/formulario-categoria/formulario-categoria.component';

const routes: Routes = [
  {path: 'categorias', component:CategoriasComponent},
  {path: 'categorias/añadirCategoria', component:FormularioCategoriaComponent},
  {path: 'categorias/editarCategoria/:id', component:EditarCategoriaComponent},
  {path: 'categorias/eliminarCategoria/:id', component:EliminarCategoriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
