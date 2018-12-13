import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {logService} from '../../servicios/log.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, public du:logService) { }

  ngOnInit() {
  }
  logout() {
    this.du.cerrarSesion(this.afAuth);
    // this.du.usuario={uid:"",name:"",email:"",imagen:""};
    // this.afAuth.auth.signOut();
    // sessionStorage.setItem("UserLog",null);
  }

}
