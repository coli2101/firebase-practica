import { NgModule } from '@angular/core';


import {AppMaterialModule} from './../app-material/app-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser/';
import { CommonModule } from '@angular/common';
import { ComponenteMensajeComponent } from './componente-mensaje/componente-mensaje.component';
import {FormsModule} from '@angular/forms';
import {MensajeRoutingModule} from './mensaje-routing.module';
import { Ng2ImgMaxModule } from 'ng2-img-max';
import { ComponenteMensajeFormComponent } from './componente-mensaje-form/componente-mensaje-form.component';
import { ComponenteMensajeListaComponent } from './componente-mensaje-lista/componente-mensaje-lista.component';

@NgModule({
  declarations: [ComponenteMensajeComponent, ComponenteMensajeFormComponent, ComponenteMensajeListaComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MensajeRoutingModule,
    Ng2ImgMaxModule
  ]
})
export class MensajeModule { }
