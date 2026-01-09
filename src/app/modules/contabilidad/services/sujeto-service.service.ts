import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, shareReplay, switchMap, timer, of, map } from 'rxjs';
import { Sujeto } from '../models/models';
import { ConfigService } from '../../../core/services/config.service';
import { PageEvent } from '@angular/material/paginator';

@Injectable({
  providedIn: 'root'
})
export class SujetoService {
  private cache$: Observable<Sujeto[]> | null = null;
  private readonly cacheRefreshInterval = 300000; // 5 minutos
  private url: string;
  private apiKey: string;

  constructor(
    private http: HttpClient,
    private configService: ConfigService
  ) {
    this.url = configService.apiUrl();
    this.apiKey = configService.apiKey();
  }

  // Obtener todos los artículos (con caché)
  listAll(): Observable<Sujeto[]> {
    if (!this.cache$) {
      const timer$ = timer(0, this.cacheRefreshInterval);
      this.cache$ = timer$.pipe(
        switchMap(() => this.fetchData()),
        shareReplay(1)
      );
    }
    return this.cache$;
  }

  // Paginación frontend (para componentes)
 list(
  page: number,
  pageSize: number,
  filter: string = ''
): Observable<{ data: Sujeto[]; total: number }> {
  return this.listAll().pipe(
    map((allItems) => {
      // Aplicar filtro si existe
      const filteredItems = filter
        ? allItems.filter(item =>
            item.nombre.toLowerCase().includes(filter.toLowerCase()) ||
            item.id.toString().includes(filter)
          )
        : allItems;

      // Paginar resultados filtrados
      const startIndex = page * pageSize;
      const paginatedItems = filteredItems.slice(startIndex, startIndex + pageSize);

      return {
        data: paginatedItems,
        total: filteredItems.length // Total de items filtrados
      };
    })
  );
}



  private fetchData(): Observable<Sujeto[]> {
    const headers = new HttpHeaders({ 'ApiKey': this.apiKey });
    return this.http.get<Sujeto[]>(`${this.url}/api/contabilidad/sujeto`, { headers });
  }

  clearCache(): void {
    this.cache$ = null;
  }
}