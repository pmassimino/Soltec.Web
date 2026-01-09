import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { MobileLayoutComponent } from '../../../shared/layout-mobile/layout-mobile.component';


@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, MatIconModule, RouterModule,MobileLayoutComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
userName = 'Administrador'; // Puedes obtenerlo del servicio de autenticación

  constructor(private router: Router) {}

  // Verificar si la ruta activa es la actual para resaltar en navegación
  isActive(route: string): boolean {
    return this.router.isActive(route, true);
  }
}
