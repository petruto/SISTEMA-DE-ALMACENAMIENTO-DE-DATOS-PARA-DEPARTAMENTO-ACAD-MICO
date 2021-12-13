import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoNoticiasComponent } from './listado-noticias/listado-noticias.component';
import { ListadoGenericoComponent } from './utilidades/listado-generico/listado-generico.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { RatingComponent } from './utilidades/rating/rating.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IndiceProfesoresComponent } from './profesores/indice-profesores/indice-profesores.component';
import { CrearProfesorComponent } from './profesores/crear-profesor/crear-profesor.component';
import { IndiceAsistenciaComponent } from './asistencia/indice-asistencia/indice-asistencia.component';
import { CrearAsistenciaComponent } from './asistencia/crear-asistencia/crear-asistencia.component';


import { IndiceDatosPersonalesComponent } from './datos-personales/indice-datos-personales/indice-datos-personales.component';
import { CrearDatosPersonalesComponent } from './datos-personales/crear-datos-personales/crear-datos-personales.component';
import { EditarAsistenciaComponent } from './asistencia/editar-asistencia/editar-asistencia.component';
import { EditarProfesorComponent } from './profesores/editar-profesor/editar-profesor.component';
import { EditarDatosComponent } from './datos-personales/editar-datos/editar-datos.component';

import { FormularioProfesorComponent } from './profesores/formulario-profesor/formulario-profesor.component';
import { InputImgComponent } from './utilidades/input-img/input-img.component';
import { FiltroCursosComponent } from './cursos/filtro-cursos/filtro-cursos.component';


@NgModule({
  declarations: [
    AppComponent,
    ListadoNoticiasComponent,
    ListadoGenericoComponent,
    MenuComponent,
    RatingComponent,
    LandingPageComponent,
    IndiceProfesoresComponent,
    CrearProfesorComponent,
    IndiceAsistenciaComponent,
    CrearAsistenciaComponent,
    
    IndiceDatosPersonalesComponent,
    CrearDatosPersonalesComponent,
    EditarAsistenciaComponent,
    EditarProfesorComponent,
    EditarDatosComponent,
    
    FormularioProfesorComponent,
    InputImgComponent,
    FiltroCursosComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
