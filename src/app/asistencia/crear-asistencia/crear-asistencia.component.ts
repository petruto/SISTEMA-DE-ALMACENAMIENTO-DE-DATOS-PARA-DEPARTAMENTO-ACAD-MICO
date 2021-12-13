import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-asistencia',
  templateUrl: './crear-asistencia.component.html',
  styleUrls: ['./crear-asistencia.component.css']
})
export class CrearAsistenciaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  guardarCambios(){
    this.router.navigate(['asistencia'])
    }
}
