import { Component, OnInit,Input,Output,EventEmitter, OnChanges, Testability} from '@angular/core';
import {FormGroup,FormControl,Validators,FormArray} from '@angular/forms';
import {GruposService} from '../../servicios/grupos.service';


declare var $:any; //con esto habilito jquery
//import { formControlBinding } from '@angular/forms/src/directives/ng_model';
//import { Observable, iif } from 'rxjs';
@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.css']
})
export class GrupoComponent implements OnInit, OnChanges{
  @Input() grupo;

  @Output() siguienteGrupo:EventEmitter<any>;
  gruposForm:FormGroup;
 
  //deshabilitarGuardar=false;

  //itemsLocal: Observable<any[]>;
  //itemsLocal2: any;
  //testGrupo:any;

  constructor( private _gruposService:GruposService) { 
    this.siguienteGrupo=new EventEmitter();
    this.gruposForm=new FormGroup({});
   // this.itemsLocal=this._gruposService.gruposFirebase;
   // this.itemsLocal2=this._gruposService.grupoFirebaseA;
  }

  ngOnChanges(changes:any){

    this.inicializarFormulario();
    //carga los valores alamcenados en la base de datos
    if(changes.grupo.currentValue.resultadosBD!==""){
      this.cargarValoresFormularioBD(changes.grupo.currentValue.resultadosBD);
    }
  }

 
  ngOnInit() {
  }

  //carga los valores guardados de la bd
  cargarValoresFormularioBD(databd){
    // tslint:disable-next-line:forin
    for (const key in databd) {

      const input1=key.split('-')[0];
      const input2=key.split('-')[1];

      const value1=databd[key].split('-')[0];
      const value2=databd[key].split('-')[1];

      this.gruposForm.get(input1).setValue(value1); //2nd forma de asignar un valor a un input
      this.gruposForm.get(input2).setValue(value2);
    }
    $("#modalPrincipal").modal("hide");
  }

  //Inicializa los campos de lso formularios 
  inicializarFormulario(){
   
    for(let a=0;a<this.grupo.equipos.length;a++){
     
      if(a<2){
        this.gruposForm.setControl('fecha1_'+this.grupo.equipos[a].nombre,new FormControl(0));
        this.gruposForm.setControl('fecha1_'+this.grupo.equipos[a+2].nombre,new FormControl(0));
        
        if(a===0)
          this.gruposForm.setControl('fecha2_'+this.grupo.equipos[a].nombre,new FormControl(0));

        if(a===1)
          this.gruposForm.setControl('fecha2_'+this.grupo.equipos[3].nombre,new FormControl(0));

        this.gruposForm.setControl('fecha2_'+this.grupo.equipos[a+1].nombre,new FormControl(0));
        this.gruposForm.setControl('fecha3_'+this.grupo.equipos[a].nombre,new FormControl(0));

        if(a===0)
          this.gruposForm.setControl('fecha3_'+this.grupo.equipos[3].nombre,new FormControl(0));

        if(a===1)
          this.gruposForm.setControl('fecha3_'+this.grupo.equipos[2].nombre,new FormControl(0));
      }
    }
    //this.gruposForm.patchValue({fecha1_Egipto:10}); //2nd forma de asignar un valor a 1 input
  }

  validar(tipo){
    const resultados=this._gruposService.organizarResultadosF(this.gruposForm.value);
    this.grupo.resultadosBD=resultados;
    this.siguienteGrupo.emit(tipo);
  }

  //ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
    //this.inicializarFormulario();
    // console.log(this.grupo);
    // console.log(this.grupo['resultadosBD']);
   // console.log(this._gruposService.formularioResultados);

    // tslint:disable-next-line:forin



    // tslint:disable-next-line:forin
    // for (const key in this._gruposService.formularioResultados) {
    //   if(this.grupo.nombre===key && this._gruposService.formularioResultados[key]!=="" ){
    //     this.inicializarFormulario();
    //     this.cargarValoresFormulario(this._gruposService.formularioResultados[this.grupo.nombre]);
    //     inicializa=false;
    //   }
    // }
    /*
    if(inicializa===true){
      $("#modalPrincipal").modal("show");
      this._gruposService.consultarTablaFirebase(this.grupo.nombre)  //consulta la bd de datos
      .subscribe(response=>{ 
        if(response!==undefined){
          this.cargarValoresFormularioBD(response);
        }
      });
    }
    */
  //}

    //carga los valroes que hayan digitado previo al almacenamiento
  // cargarValoresFormulario(valoresPrevios){
  //   //this.gruposForm.patchValue({fecha1_Egipto:10});
  //   const obj={};
  //   // tslint:disable-next-line:forin
  //   for (const key in valoresPrevios) {
  //     obj[key]=valoresPrevios[key];
  //   }
  //   //console.log(obj);
  //   this.gruposForm.setValue(obj);

  // }
  /*
  guardar(){
    $("#modalPrincipal").modal("show");
    // this._gruposService.organizarResultados(this.gruposForm.value,this.grupo.nombre);
    // this._gruposService.formularioResultados[this.grupo.nombre]=this.gruposForm.value;
    

    // const that=this;
    // this._gruposService.insertarGruposFirebase()
    // .then(function(data){
    //   that.deshabilitarGuardar=false;
    //   $("#modalPrincipal").modal("hide");
    // });
  }*/
  /*
  promesa(){
    this._gruposService.testPromesa()
    .then(function(data){
      console.log("termino la opoeracion",data);
    })
    .catch(function(data){
      console.log("error",data);
    });
    console.log("click");
  }*/

}
