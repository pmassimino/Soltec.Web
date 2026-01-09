import { Routes } from '@angular/router';
import { LoginComponent } from './shared/login/login.component';
import { AuthGuard } from './core/services/auth.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'almacen/articulos/'
  },
  {path: 'login', component: LoginComponent}, 
  {
    path: 'almacen',
    loadChildren: () => import('./modules/almacen/almacen.module').then(m => m.AlmacenModule)
  },
  {
    path: 'contabilidad',
    loadChildren: () => import('./modules/contabilidad/contabilidad.module').then(m => m.ContabilidadModule)
  }  ,
   {
    path: 'mobile',
    loadChildren: () => import('./modules/mobile/mobile.module').then(m => m.MobileModule)
  },
  {
    path: '**',
    redirectTo: 'mobile'
  }
];
