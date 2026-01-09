import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../../core/services/auth.guard';
import { SujetoListComponent } from './sujeto/sujeto-list/sujeto-list.component';

const routes: Routes = [
  {
    path: 'sujetos',component: SujetoListComponent,canActivate: [AuthGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContabilidadRoutingModule { }
