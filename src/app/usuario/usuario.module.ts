import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AppMaterialModule } from '../app-material/app-material.module';
import { FormsModule } from '@angular/forms';
import { PasswordrecoveryComponent } from './passwordrecovery/passwordrecovery.component';

@NgModule({
  declarations: [LoginComponent, SignupComponent, PasswordrecoveryComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    FormsModule,
    UsuarioRoutingModule
  ],
  exports:[LoginComponent],
  entryComponents:[SignupComponent,PasswordrecoveryComponent]
})
export class UsuarioModule { }
