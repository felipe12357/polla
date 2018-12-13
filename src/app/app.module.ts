import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GrupoComponent } from './componentes/grupo/grupo.component';
import { GruposComponent } from './componentes/grupos/grupos.component';

import {ReactiveFormsModule} from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
//import { Ng2GoogleChartsModule} from 'ng2-google-charts';

import { environment } from '../environments/environment';

import {APP_ROUTING} from './app.routes';
import { ModalComponent } from './componentes/modal/modal.component';
import { FinalesComponent } from './componentes/finales/finales.component';
import { LoginComponent } from './componentes/login/login.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';

//https://www.npmjs.com/package/ng2-google-charts/v/3.5.0

@NgModule({
  declarations: [
    AppComponent,
    GrupoComponent,
    GruposComponent,
    ModalComponent,
    FinalesComponent,
    LoginComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    ReactiveFormsModule,
   // Ng2GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
