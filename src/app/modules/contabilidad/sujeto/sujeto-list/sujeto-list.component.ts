import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Sujeto } from '../../models/models';
import { SujetoService } from '../../services/sujeto-service.service';

@Component({
  selector: 'app-sujeto-list',
  imports: [CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatProgressBarModule,
    MatCardModule,
    MatButtonModule,
    NgIf,    ],
  templateUrl: './sujeto-list.component.html',
  styleUrl: './sujeto-list.component.css'
})
export class SujetoListComponent implements OnInit {
 displayedColumns: string[] = ['id', 'nombre'];
  dataSource = new MatTableDataSource<Sujeto>();
  totalItems = 0;
  pageSize = 15;
  pageIndex = 0;
  currentFilter: string = '';
  loading = true;
  error: string | null = null;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private entityService: SujetoService) { }

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