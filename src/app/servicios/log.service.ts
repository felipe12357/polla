import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot,RouterStateSnapshot, CanActivate} from '@angular/router';
import { Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
// tslint:disable-next-line:class-name
export class logService implements CanActivate {
  public usuario={uid:"",name:"",email:"",imagen:""};
  constructor(private _router:Router) { }

  canActivate(){//next:ActivatedRouteSnapshot,state:RouterStateSnapshot
    
    if(this.usuario.uid!=="")
      return true;
    else{
        this._router.navigate(['ingreso']);
        console.error("bloqueado por el guard");
        return false;
      }
    }

  cerrarSesion(afAuth){
    this.usuario={uid:"",name:"",email:"",imagen:""};
    afAuth.auth.signOut();
    sessionStorage.setItem("UserLog",null);
    this._router.navigate(['ingreso']);
  }
}
