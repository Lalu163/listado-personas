import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Persona } from '../persona.model';
import { LoggingService } from '../LoggingService.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  providers: [LoggingService]
})
export class FormularioComponent {

  @Output() personaCreada = new EventEmitter<Persona>();

  //nombreInput:string = '';
  //apellidoInput:string = '';
  
  constructor(private loggingService: LoggingService){

  }

  @ViewChild('nombreInput') nombreInput: ElementRef;
  @ViewChild('apellidoInput') apellidoInput: ElementRef;

  agregarPersona(){
    let persona1 = new Persona(this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value);
    this.loggingService.enviarMensajeAConsola("Enviamos persona con nombre: "+ persona1.nombre + " y apellido: "+ persona1.apellido)
    //this.personaCreada.emit(persona1);  ya no se trabaja con un evento
  }
}
