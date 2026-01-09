// articulo-list.component.ts
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule, CurrencyPipe, DecimalPipe } from '@angular/common';
import { NgIf } from '@angular/common';
import { Articulo } from '../../models/models';
import { ArticuloService } from '../../services/articulo-service.service';
import { MobileLayoutComponent } from "../../../../shared/layout-mobile/layout-mobile.component";

@Component({
  selector: 'app-articulo-list',
  standalone: true,
  templateUrl: './articulo-list.component.html',
  styleUrls: ['./articulo-list.component.css'],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatProgressBarModule,
    MatCardModule,
    MatButtonModule,
    NgIf,    
]
})
export class ArticuloListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nombre', 'precioVentaFinal', 'stock', 'pendRemitir'];
  dataSource = new MatTableDataSource<Articulo>();
  totalItems = 0;
  pageSize = 15;
  pageIndex = 0;
  currentFilter: string = '';
  loading = true;
  error: string | null = null;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private entityService: ArticuloService) { }

  ngOnInit(): void {
    this.loadData();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  loadData(): void {
    this.loading = true;
    this.entityService.list(this.pageIndex, this.pageSize, this.currentFilter).subscribe({
      next: (response) => {
        this.dataSource = new MatTableDataSource(response.data);
        this.totalItems = response.total;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        console.error(err);
      }
    });
  }

  onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadData();
  }
  getPrecioFormateado(precio: number, idDivisa: number): string {
    if (idDivisa === 1) {
      return `U$S ${precio.toFixed(2)}`;
    } else {
      return `$ ${precio.toFixed(2)}`;
    }
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.currentFilter = filterValue.trim();
    this.pageIndex = 0; // Reiniciar a la primera página
    this.loadData(); // Volver a cargar con el filtro
  }

  refresh(): void {
    this.loading = true;
    this.error = null;
    this.loadData();
  }
}