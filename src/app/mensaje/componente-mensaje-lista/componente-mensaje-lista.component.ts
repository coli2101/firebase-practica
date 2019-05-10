import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-componente-mensaje-lista',
  templateUrl: './componente-mensaje-lista.component.html'
})
export class ComponenteMensajeListaComponent implements OnInit {
  mensajes: Observable<any[]>;
  
  constructor(private servicio: AppService) { }

  ngOnInit() {
    this.mensajes = this.servicio.listar();
  }

  borrar(id: string) {
    this.servicio.borrar(id);
  }

}
