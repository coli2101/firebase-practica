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
  db: AngularFireDatabase;

  constructor(db: AngularFireDatabase,
    private storage: AngularFireStorage,
    private authenticator: AngularFireAuth) {
    this.mensajesRef = db.list('mensajes');
    this.db = db;
  }

  crearCuente(correo:string, clave:string){
    return this.authenticator.auth.createUserWithEmailAndPassword(correo,clave);
  }

  listar() {
    return this.mensajesRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))
    );
  }

  consultar(key:string){
    return this.db.database.ref('mensajes').child(key);
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

  recuperarClave(usuario:string){
    this.authenticator.auth.sendPasswordResetEmail(usuario).
    then(() => console.log("email sent"))
    .catch((error) => console.log(error))
  }

}
