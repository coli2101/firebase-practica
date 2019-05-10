import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  mensajesRef: AngularFireList<any>;


  constructor(db: AngularFireDatabase,
    private storage: AngularFireStorage,
    private authenticator: AngularFireAuth) {
    this.mensajesRef = db.list('mensajes');
  }
  listar() {
    return this.mensajesRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))
    );
  }
  guardar(objeto: object) {
    this.mensajesRef.push(objeto);
  }
  borrar(key: string) {
    this.mensajesRef.remove(key);
    //this.storage.ref(carpeta +'/'+ nombreArchivo).delete();
  }
  subirArchivo(carpeta:string, nombreArchivo:string,archivo:any){
    this.storage.ref(carpeta +'/'+ nombreArchivo).put(archivo);
  }

  autenticar(correo:string, clave:string){
    return this.authenticator.auth.signInWithEmailAndPassword(correo,clave);
  }
  cerrarSesion(){
    this.authenticator.auth.signOut();
  }

}
