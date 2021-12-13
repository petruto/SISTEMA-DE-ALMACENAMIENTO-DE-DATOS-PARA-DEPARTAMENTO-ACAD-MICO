import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { toBase64 } from '../utilidades';

@Component({
  selector: 'app-input-img',
  templateUrl: './input-img.component.html',
  styleUrls: ['./input-img.component.css']
})
export class InputImgComponent implements OnInit {

  constructor() { }
  imagenBase64: any;

@Output()
archivoSeleccionado: EventEmitter<File> = new EventEmitter<File>();

  ngOnInit(): void {
  }
change(event: any){
  if(event.target.files.length > 0) {
    const file: File = event.target.files[0];
    toBase64(file).then((value: any)=> this.imagenBase64 = value);
    this.archivoSeleccionado.emit(file);
  }
}
}
