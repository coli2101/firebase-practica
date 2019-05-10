import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Ng2ImgMaxService } from 'ng2-img-max';

@Component({
  selector: 'app-componente-mensaje-form',
  templateUrl: './componente-mensaje-form.component.html'
})
export class ComponenteMensajeFormComponent implements OnInit {

  nombre: string;
  correo: string;
  mensaje: string;
  message: string;
  imagePath: string;
  imgURL: string;
  imgOriginalURL: any;
  mimeType: any;
  reader: any;
  carpeta: string;
  nombreArchivo: string;

  constructor(private servicio: AppService,
    private ng2ImgMaxService: Ng2ImgMaxService) { }

  ngOnInit() {
    this.inicializarCampos();
    this.carpeta = 'imagenes';
  }

  inicializarCampos() {
    this.nombre = '';
    this.correo = '';
    this.mensaje = '';
    this.imgURL = null;
    this.imgOriginalURL = null;
    this.nombreArchivo = null;

  }
  guardar() {

    this.servicio.guardar({
      nombre: this.nombre,
      correo: this.correo,
      mensaje: this.mensaje,
      imagen: this.imgURL,
      nombreArchivo: this.imgURL === null ? null : this.nombreArchivo
    });
    if (this.imgURL !== null) {
      this.servicio.subirArchivo(this.carpeta, this.nombreArchivo, this.imgOriginalURL);
    }
    this.inicializarCampos();
  }


  obtenerNombre(file: any){
    return String(Date.now())+'.'+file.name.split('.').pop();
  }

  preview(files) {
    if (files.length === 0) {
      return;
    }
    this.mimeType = files[0].type;
    if (this.mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported.';
      return;
    }
    this.reader = new FileReader();
    this.imagePath = files;

    this.imgOriginalURL = files[0];
    this.nombreArchivo = this.obtenerNombre(files[0]);


    this.ng2ImgMaxService.resize([files[0]], 200, 200).subscribe((result) => {
      this.reader.readAsDataURL(result);
      this.reader.onload = () => {
        this.imgURL = this.reader.result;
      }
    });
  }

}
