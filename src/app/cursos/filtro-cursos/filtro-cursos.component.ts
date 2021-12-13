import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-filtro-cursos',
  templateUrl: './filtro-cursos.component.html',
  styleUrls: ['./filtro-cursos.component.css']
})
export class FiltroCursosComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form:any= FormGroup;

ciclos = [
  {id: 1, nombre: '1er ciclo'},
  {id: 2, nombre: '2do ciclo'},
  {id: 3, nombre: '3ro ciclo'},
  {id: 4, nombre: '4to ciclo'},
  {id: 5, nombre: '5to ciclo'},
  {id: 6, nombre: '6to ciclo'},
  {id: 7, nombre: '7mo ciclo'},
  {id: 8, nombre: '8vo ciclo'},
  {id: 9, nombre: '9no ciclo'},
  {id: 10, nombre: '10mo ciclo'},
  
];

cursos = [
  {titulo:'Introducción a la computación', ciclos:[1] },
  {titulo:'CALCULO DIFERENCIAL', ciclos:[1] },
  {titulo:'CALCULO INTEGRAL', ciclos:[2] },
  {titulo:'Álgebra lineal', ciclos:[2] },
  {titulo:'Cálculo multivariable', ciclos:[3] },
  {titulo:'Física II', ciclos:[3] },

]

  ngOnInit(): void {
    
    this.form =this.formBuilder.group({
      titulo: ['',{
        validators: [Validators.required],
  },], 
      cicloId: 0,
    })
  }
limpiar(){

}
}
