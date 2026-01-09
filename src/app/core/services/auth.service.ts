import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {jwtDecode} from 'jwt-decode';  // Importa la librería
import { ConfigService } from './config.service';

interface JwtPayload {
  idUsuario: string;
  roles: string; // Esto es un string JSON serializado
  // ...otros campos que necesites
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private config: ConfigService) {}

  login(username: string, password: string): Observable<boolean> {
    const method = this.config.apiUrlAuth() + "/api/login";
    return this.http.post<{ token: string }>(method, { username, password }).pipe(
      map(result => {
        localStorage.setItem('access_token', result.token);
        
        // Decodificar el token
        const decoded = jwtDecode<JwtPayload>(result.token);
        const roles = JSON.parse(decoded.roles) as string[];
        
        // Verificar si tiene el rol 5
        if (!roles.includes('5')) {
          this.logout(); // Limpiar el token si no tiene permiso
          return false;
        }
        
        return true;
      }),
      catchError(() => of(false))
    );
  }

  logout(): void {
    localStorage.removeItem('access_token');
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('access_token');
    if (!token) return false;

    try {
      const decoded = jwtDecode<JwtPayload>(token);
      const roles = JSON.parse(decoded.roles) as string[];
      return roles.includes('5'); // Verificar rol al recargar la página
    } catch {
      return false;
    }
  }
}