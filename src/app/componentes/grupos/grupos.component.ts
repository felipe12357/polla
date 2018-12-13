import { Component, OnInit, ViewChild } from '@angular/core';
import { Grupos } from '../../clases/grupos.class';
import {GruposService} from '../../servicios/grupos.service';
import { GrupoComponent } from '../grupo/grupo.component';

import {Router} from '@angular/router';

declare var $:any; //con esto habilito jquery
@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {

  //Implementado para poder  llamar funciones del hijo
  @ViewChild(GrupoComponent) hijo: GrupoComponent;

  _grupos:Grupos;
  grupoActual="grupoA";
  deshabilitarGuardar=false;

  constructor(private _gruposService:GruposService, private _router:Router) {
    this._grupos=new Grupos();
  }

  asignarGrupo(tipo,siguente,anterior){

    if(tipo==="regresar")
      this.grupoActual=anterior;

    if(tipo==="siguiente")
      this.grupoActual=siguente;
  }

  ngOnInit() {
    $("#modalPrincipal").modal("show");
    const that=this;
    this._gruposService.consultarResultadosGrupos()
    .subscribe(querySnapshot=>{
        $("#modalPrincipal").modal("hide");
        querySnapshot.forEach(function(doc) {
          const resultadosGrupo=that.cargarValoresBD(doc.data());
          that.actualizarResultadosModel(doc,resultadosGrupo);
        });
        
    });
  }

  //agrega los valores previos al input (viene del modelo)
  actualizarResultadosModel(doc,resultadosGrupo){
    let nombreGrupo=doc.id.replace(" ","");
    nombreGrupo=nombreGrupo.replace("G","g");

    const objNuevo={
      "nombre": this._grupos[nombreGrupo].nombre,
      "equipos":this._grupos[nombreGrupo].equipos,
      "resultadosBD":resultadosGrupo
    };

    this._grupos[nombreGrupo]=objNuevo;

  }

  cargarValoresBD(valoresPrevios){
     // tslint:disable-next-line:forin

    const obj={};
    // tslint:disable-next-line:forin
    for (const key in valoresPrevios) {
      obj[key]=valoresPrevios[key];
    }
    //console.log(obj);
    return obj;
    
  }

  guardar(){
    this.hijo.validar("siguiente");  
    this.deshabilitarGuardar=true;
    $("#modalPrincipal").modal("show");

    let termino=0;
    const that=this;
    // tslint:disable-next-line:forin
    for (const key in this._grupos) {
      //console.log(this._grupos[key]);

      if (this._grupos.hasOwnProperty(key)) {
        const element = this._grupos[key];
      
        this._gruposService.insertarGruposFirebaseF(element)
        .then(function(data){
            termino++;
            if(termino===Object.keys(that._grupos).length){
              $("#modalPrincipal").modal("hide");
              that.deshabilitarGuardar=false;
              that._router.navigate(['/finales']);
            }
        });
      }
    }

  }
}
