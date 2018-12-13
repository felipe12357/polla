import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {logService } from './log.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class GruposService {

  //resultadosOrganizados={ "Grupo A":{}, };
  //formularioResultados={"Grupo A":""};

  usuarioDB="Prueba Felipe";

  //gruposFirebase: Observable<any[]>; //Aun no ulitizada
  //grupoFirebaseA: Observable<any[]>; //Aun no utilizada

  private grupoADocument: AngularFirestoreDocument<any>;
 
  constructor(private _firebd: AngularFirestore, private _datosUsuarios:logService) {
    //console.log(_datosUsuarios.usuario);
     //Asigna cual va a ser el usuario bajo el cual se van a almacenar las respeusta
    this.usuarioDB=_datosUsuarios.usuario.email;
    

    //COnsulta todos los regitros //se actualizan sin reacargar la pagina
    //this.gruposFirebase = _firebd.collection('testa').valueChanges();
    //Consulta solo una tabla //se actualizan sin reacargar la pagina
    //this.grupoADocument = _firebd.doc<any>('testa/Grupo A');
    //this.grupoFirebaseA = this.grupoADocument.valueChanges();
 
  }

  organizarResultadosF(results){
    const resultadosOrganizados={}; //Reinicia los valores guardados

    let fecha:any=[];
    let a=1;
    // tslint:disable-next-line:forin
    for (const key in results) {
        const element = results[key];
        fecha.push({nombre:key,goles:element});
        
        if(a%2===0){
          const result=fecha;
          const equipos1=[result[0].nombre]+"-"+[result[1].nombre];
          const goles1=[result[0].goles]+"-"+[result[1].goles];
         
          resultadosOrganizados[equipos1]=goles1;

          fecha=[];
        }
        a++;
    }
    return resultadosOrganizados;

  }

  insertarGruposFirebaseF(grupo){
    const that=this;
     const promise = new Promise(function(resolve, reject){
       //console.log(that.usuarioDB,grupo.resultadosBD);
        that._firebd.collection(that.usuarioDB).doc(grupo.nombre).set(grupo.resultadosBD)
        .then(()=>{
           resolve("inserto");
        })
        .catch(error=>console.log(error));
    });
   

    return promise;
  }

  consultarResultadosGrupos(){

    const docRef = this._firebd.collection(this.usuarioDB).get();
    return docRef;
  }


    //COnsulta los resultados almacenados en la base de datos
  //solo se cargan 1 sola vez
  /*
  consultarTablaFirebase(nombreGrupo){
    const docRef = this._firebd.collection(this.usuarioDB).doc(nombreGrupo);
    return docRef.get().pipe(map((doc:any)=>doc.data()));
  }
  */

  //Almacena los resultados en firebase
  /*insertarGruposFirebase(){
    let termino=0;
    const that=this;
    const promise = new Promise(function(resolve, reject){
      // tslint:disable-next-line:forin
      for (const nombreGrupo in that.resultadosOrganizados) {
        const resultadosinObjeto=Object.assign({}, that.resultadosOrganizados[nombreGrupo]);
        that._firebd.collection(that.usuarioDB).doc(nombreGrupo).set(resultadosinObjeto)
        .then(()=>{
          termino++;

          if(termino===Object.keys(that.resultadosOrganizados).length){
            resolve();
          }
        })
        .catch(error=>console.log(error));
      }
    });
    return promise;
  }*/


  /*
  testPromesa(){
    const promise = new Promise(function(resolve, reject){
        const nombre="andres";
        console.log("en la promasa");
        //resolve(nombre);
        reject(nombre);
      });
    return promise;
  }*/
  /*
  insertarRegistroFirebase(){
      this._firebd.collection("testa").doc("LA").set({
          name: "Los Angeles",
          state: "CA",
          country: "USA"
      })
      .then(function() {
          console.log("Document successfully written!");
      })
      .catch(function(error) {
          console.error("Error writing document: ", error);
      });
  }*/

/*
  organizarResultados(results,nombreGrupo){
    this.resultadosOrganizados[nombreGrupo]=[]; //Reinicia los valores guardados

    let fecha:any=[];
    let a=1;
    // tslint:disable-next-line:forin
    for (const key in results) {
        const element = results[key];
        fecha.push({nombre:key,goles:element});
        if(a%2===0){
          this.ordenarResultados2(fecha,nombreGrupo);
          fecha=[];
        }
        a++;
    }
  }

  private ordenarResultados2(result:any[],nombreGrupo){
    const equipos1=[result[0].nombre]+"-"+[result[1].nombre];
    const goles1=[result[0].goles]+"-"+[result[1].goles];
    this.resultadosOrganizados[nombreGrupo][equipos1]=goles1;
  }*/
}
