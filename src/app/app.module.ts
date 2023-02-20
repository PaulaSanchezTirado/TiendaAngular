import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { CabeceraComponent } from './componentes/header/cabecera/cabecera.component';
import { MenuComponent } from './componentes/body/menu/menu.component';
import { CategoriasComponent } from './componentes/body/categorias/categorias.component'
import { FormsModule } from '@angular/forms';
import { InicioComponent } from './componentes/header/inicio/inicio.component';
import { PiedepaginaComponent } from './componentes/footer/piedepagina/piedepagina.component';
import { FormCategoriaComponent } from './componentes/body/form-categoria/form-categoria.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    MenuComponent,
    CategoriasComponent,
    InicioComponent,
    PiedepaginaComponent,
    FormCategoriaComponent
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
