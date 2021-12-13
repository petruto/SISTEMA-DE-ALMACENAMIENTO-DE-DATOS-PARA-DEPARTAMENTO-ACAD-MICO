import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CrearProfesorComponent } from './profesores/crear-profesor/crear-profesor.component';
import { IndiceProfesoresComponent } from './profesores/indice-profesores/indice-profesores.component';
import { IndiceAsistenciaComponent } from './asistencia/indice-asistencia/indice-asistencia.component';
import { CrearAsistenciaComponent } from './asistencia/crear-asistencia/crear-asistencia.component';

import { IndiceDatosPersonalesComponent } from './datos-personales/indice-datos-personales/indice-datos-personales.component';
import { CrearDatosPersonalesComponent } from './datos-personales/crear-datos-personales/crear-datos-personales.component';
import { EditarAsistenciaComponent } from './asistencia/editar-asistencia/editar-asistencia.component';
import { EditarProfesorComponent } from './profesores/editar-profesor/editar-profesor.component';

import { EditarDatosComponent } from './datos-personales/editar-datos/editar-datos.component';
import { FiltroCursosComponent } from './cursos/filtro-cursos/filtro-cursos.component';

const routes: Routes = [
  {path:'',component:LandingPageComponent},
  {path:'profesores', component: IndiceProfesoresComponent},
  {path:'profesores/crear',component: CrearProfesorComponent},
  {path:'profesor/editar/:id',component: EditarProfesorComponent},

  {path:'asistencia', component: IndiceAsistenciaComponent},
  {path:'asistencia/crear',component: CrearAsistenciaComponent},
  {path:'asistencia/editar/:id',component: EditarAsistenciaComponent},

  {path: 'cursos', component:FiltroCursosComponent},

  {path:'datos-personales', component: IndiceDatosPersonalesComponent},
  {path:'datos-personales/crear',component: CrearDatosPersonalesComponent},
  {path:'datos-personales/editar/:id',component: EditarDatosComponent},
  {path:'**', redirectTo:''}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
