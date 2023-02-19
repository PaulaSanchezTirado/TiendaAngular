import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { CabeceraComponent } from './componentes/header/cabecera/cabecera.component';
import { MenuComponent } from './componentes/body/menu/menu.component';
import { CategoriasComponent } from './componentes/body/categorias/categorias.component'
import { FormsModule } from '@angular/forms';
import { FormularioCategoriaComponent } from './componentes/body/formulario-categoria/formulario-categoria.component';
import { EditarCategoriaComponent } from './componentes/body/editar-categoria/editar-categoria.component';
import { EliminarCategoriaComponent } from './componentes/body/eliminar-categoria/eliminar-categoria.component';
import { InicioComponent } from './componentes/header/inicio/inicio.component';
import { PiedepaginaComponent } from './componentes/footer/piedepagina/piedepagina.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    MenuComponent,
    CategoriasComponent,
    FormularioCategoriaComponent,
    EditarCategoriaComponent,
    EliminarCategoriaComponent,
    InicioComponent,
    PiedepaginaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
