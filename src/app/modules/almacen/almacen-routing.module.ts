import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticuloListComponent } from './articulo/articulo-list/articulo-list.component';
import { AuthGuard } from '../../core/services/auth.guard';

const routes: Routes = [
  {
    path: 'articulos',component: ArticuloListComponent,canActivate: [AuthGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlmacenRoutingModule { }
