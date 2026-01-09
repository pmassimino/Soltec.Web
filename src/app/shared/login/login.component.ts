import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from '../../core/services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-login',
  imports:[ CommonModule,FormsModule,MatIconModule,MatFormFieldModule],
  standalone:true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
  
})
export class LoginComponent {
  username: string = "";
  password: string = "";
  error: string = "";

  constructor(private auth: AuthService, private router: Router) { }

  public submit() {
    this.auth.login(this.username, this.password)
      .pipe(first())
      .subscribe(
        result => {
          if (result ==false)
            {
              this.error = 'Nombre de Usuario o password incorrectos';
              return ;
            }
          if (this.isMobileOrTablet())
            {
            this.router.navigate(['mobile/']);
            }
          else
            {
              this.router.navigate(['mobile/']);
              //this.router.navigate(['almacen/articulos']);
            }} ,              
        err => this.error = 'Nombre de Usuario o password incorrectos'
      );
  }
  private isMobileOrTablet(): boolean {
    // Detección por User Agent
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // Detección por tamaño de pantalla (opcional)
    const isSmallScreen = window.innerWidth < 768;
    
    return isMobile || isSmallScreen;
  }
}