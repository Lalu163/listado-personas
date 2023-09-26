import { Component } from '@angular/core';
import { Persona } from './persona.model';
import { LoggingService } from './LoggingService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = "Listado de Personas";
  personas: Persona[] = [new Persona('Juan', 'Perez'), 
                        new Persona('Laura', 'Juarez'),
                        new Persona('Karla', 'Lara')
  ];

  constructor(private loggingService: LoggingService){}

  personaAgregada(persona: Persona){
    this.loggingService.enviarMensajeAConsola("Agregamos al array la nueva persona: " + persona.nombre)
    this.personas.push( persona );
  }
}
