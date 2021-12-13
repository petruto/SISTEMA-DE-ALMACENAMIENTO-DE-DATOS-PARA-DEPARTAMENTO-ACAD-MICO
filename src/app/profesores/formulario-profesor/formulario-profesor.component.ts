import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { profesorCreacionDTO } from '../profesor';

@Component({
  selector: 'app-formulario-profesor',
  templateUrl: './formulario-profesor.component.html',
  styleUrls: ['./formulario-profesor.component.css']
})
export class FormularioProfesorComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  form:any= FormGroup;

  @Input()
  modelo: profesorCreacionDTO | undefined;

  @Output()
  submit: EventEmitter<profesorCreacionDTO> = new EventEmitter<profesorCreacionDTO>();

  ngOnInit(): void {
    this.form =this.formBuilder.group({
      nombre: ['',{
      validators: [Validators.required],
},],
    
codigo: ['',{
  validators: [Validators.required, Validators.minLength(8), Validators.maxLength(8) ],
},], 
email: ['',{
  validators: [Validators.required, Validators.email],
},], 
 
    fechaNacimiento: '',
    foto: '',
    });
    if (this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }
  guardarCambios(){
   this.submit.emit(this.form.value);
  }
obtenerErrorCampoNombre(){
  var campo =this.form.get('nombre');
  if(campo.hasError('required')){
    return 'El campo nombre es requerido';
  }
  return '';
}
  
obtenerErrorCampoCodigo(){
  var campo =this.form.get('codigo');
  if(campo.hasError('required')){
    return 'El campo código es requerido';
  }
  if(campo.hasError('minLength')){
    return 'El campo código tiene 8 caracteres';
  }
  return '';
}

obtenerErrorCampoEmail(){
  var campo =this.form.get('email');
  if(campo.hasError('required')){
    return 'El campo email es requerido';
  }
  if(campo.hasError('email')){
    return 'No se considera email';
  }
  return '';
}

archivoSeleccionado(file: any){
 this.form.get('foto').setvalue(file);
}

}
