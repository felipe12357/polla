import {RouterModule, Routes} from '@angular/router';
import {GruposComponent} from './componentes/grupos/grupos.component';
import {FinalesComponent} from './componentes/finales/finales.component';
import {LoginComponent} from './componentes/login/login.component';
import {logService} from './servicios/log.service';

const APP_ROUTES: Routes =[
    {path:'ingreso',component:LoginComponent},
    {path:'grupos',component:GruposComponent,
        canActivate:[logService]
    },
    {path:'finales',component:FinalesComponent,
        canActivate:[logService]
    },
    {path:'**',pathMatch:'full',redirectTo:'ingreso'}
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
