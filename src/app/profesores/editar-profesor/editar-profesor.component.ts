import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { profesorCreacionDTO } from '../profesor';

@Component({
  selector: 'app-editar-profesor',
  templateUrl: './editar-profesor.component.html',
  styleUrls: ['./editar-profesor.component.css']
})
export class EditarProfesorComponent implements OnInit {

  constructor(private router: Router ) { }
  modelo: profesorCreacionDTO = {
    nombre: '', codigo: '', email: '',fechaNacimiento: new Date(),
    
  }

  ngOnInit(): void {
  }
  guardarCambios(profesor: profesorCreacionDTO){
    console.log(profesor);
    this.router.navigate(['/profesores']);
    }
}
