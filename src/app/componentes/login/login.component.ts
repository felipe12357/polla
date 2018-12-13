import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { logService} from '../../servicios/log.service';

import { Router} from '@angular/router';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(public afAuth: AngularFireAuth, public du:logService,private _router:Router) {
    this.afAuth.authState.subscribe(user=> {
      if (user) {
        du.usuario.uid=user.uid;
        du.usuario.name=user.displayName;
        du.usuario.imagen=user.photoURL;
        du.usuario.email=user.email;

        sessionStorage.setItem("UserLog",du.usuario.uid);

        //Si esta logueado el sistema lo dirige a:
        this._router.navigate(['finales']);
      }
    });
  }

  ngOnInit() {
    if(sessionStorage.getItem("UserLog")==="null" || sessionStorage.getItem("UserLog")===null)
      this.du.cerrarSesion(this.afAuth);//this.logout();
  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

}
