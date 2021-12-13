import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-noticias',
  templateUrl: './listado-noticias.component.html',
  styleUrls: ['./listado-noticias.component.css']
})
export class ListadoNoticiasComponent implements OnInit {

  constructor() { }
@Input()
noticias:any;

  ngOnInit(): void {
    
  }
  remover(indiceNoticia: number) : void{
    this.noticias.splice(indiceNoticia, 1);
  }
}
