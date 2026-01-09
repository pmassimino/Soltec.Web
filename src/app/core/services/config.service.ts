import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private config: any;

  constructor(private http: HttpClient) {
    console.log('ConfigService inicializado');
    // Si necesitas cargar configuración dinámica:
    this.loadConfig();
  }

  loadConfig(): Promise<void> {
    console.log('loadConfig() ejecutándose...');
    return this.http.get('/config.json')  // Asegúrate de que esté en la raíz si usas carpeta `public`
      .toPromise()
      .then(data => {
        this.config = data;
        console.log('Configuración cargada:');
      })
      .catch(error => {
        console.error('Error al cargar configuración:', error);
        // Para que el APP_INITIALIZER no detenga el bootstrap
        return Promise.resolve();
      });
  }
  
  apiUrl(): string {
    return this.config?.apiUrl;
  }
  apiUrlAuth(): string {
    return this.config?.apiUrlAuth;
  }
  apiKey(): string {
    return this.config?.apiKey;
  }
}
