import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticuloLayoutMobileComponent } from './articulo/articulo-layout-mobile/articulo-layout-mobile.component';
import { AuthGuard } from '../../core/services/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SujetoLayoutMobileComponent } from './sujeto/sujeto-layout-mobile/sujeto-layout-mobile.component';


const routes: Routes =[
  {
    path: '',component: DashboardComponent,canActivate: [AuthGuard] },
  {
    path: 'articulos',component: ArticuloLayoutMobileComponent,canActivate: [AuthGuard]
   },
  {
    path: 'sujetos',component: SujetoLayoutMobileComponent,canActivate: [AuthGuard]
   }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobileRoutingModule { }
