import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-datos-personales',
  templateUrl: './crear-datos-personales.component.html',
  styleUrls: ['./crear-datos-personales.component.css']
})
export class CrearDatosPersonalesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  guardarCambios(){
    this.router.navigate(['crear-datos'])
    }
}
