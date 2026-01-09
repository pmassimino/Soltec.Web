import { Component, OnInit } from '@angular/core';
import { ConfigService } from './core/services/config.service';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Soltec.Web';

  constructor(private configService: ConfigService) {}

  ngOnInit(): void {
  
  }
}
