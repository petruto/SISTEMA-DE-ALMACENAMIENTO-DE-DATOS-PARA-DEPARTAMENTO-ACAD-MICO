import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { profesorCreacionDTO } from '../profesor';

@Component({
  selector: 'app-crear-profesor',
  templateUrl: './crear-profesor.component.html',
  styleUrls: ['./crear-profesor.component.css']
})
export class CrearProfesorComponent  {

  constructor(private router: Router) { }
  
  guardarCambios(profesor: profesorCreacionDTO){
    console.log(profesor);
    this.router.navigate(['/profesores']);
    }

}