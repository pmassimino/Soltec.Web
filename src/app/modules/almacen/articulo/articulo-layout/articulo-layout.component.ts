import { Component } from '@angular/core';
import { ArticuloListComponent } from "../articulo-list/articulo-list.component";

@Component({
  selector: 'app-articulo-layout',
  imports: [ArticuloListComponent],
  templateUrl: './articulo-layout.component.html',
  styleUrl: './articulo-layout.component.css'
})
export class ArticuloLayoutComponent {

}
