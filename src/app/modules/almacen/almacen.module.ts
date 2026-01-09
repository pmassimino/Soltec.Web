import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { AlmacenRoutingModule } from './almacen-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ArticuloListComponent } from './articulo/articulo-list/articulo-list.component';


@NgModule({ 
  imports: [
    CommonModule,
    AlmacenRoutingModule // Importa el módulo de rutas
  ]
  
})
export class AlmacenModule { }
