import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, Router, RouterModule, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../core/services/auth.service';

@Component({
  standalone: true,
  selector: 'app-mobile-layout',
  templateUrl: './layout-mobile.component.html',
  styleUrls: ['./layout-mobile.component.css'],
  imports: [
    CommonModule,    
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule
  ]
})
export class MobileLayoutComponent {
  isToolbarHidden = false;
  lastScrollPosition = 0;
  

  constructor(private authService: AuthService,private router: Router) { }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const currentScrollPosition = window.pageYOffset;
    
    // Oculta la toolbar al hacer scroll hacia abajo
    this.isToolbarHidden = currentScrollPosition > this.lastScrollPosition && currentScrollPosition > 20;
    
    this.lastScrollPosition = currentScrollPosition;
  }
  onLogout()
  {
    this.authService.logout();
    this.router.navigate(['login'])
  }
}