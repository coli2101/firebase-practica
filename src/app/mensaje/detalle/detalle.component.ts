import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  id: string;
  nombre: string;
  correo: string;
  mensaje: string;

  constructor(private router: ActivatedRoute, private router2: Router,
    private servicio: AppService) {

    router2.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.ngOnInit();
      }
      // Instance of should be: 
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
    });

  }

  ngOnInit() {
    console.log('init');
    this.router.params.subscribe(params => {
      this.id = params.id;
      this.servicio.consultar(this.id).on('value', (snapshot) => {
        this.nombre = snapshot.val().nombre;
        this.correo = snapshot.val().correo;
        this.mensaje = snapshot.val().mensaje;
      });
    });
  }

}
