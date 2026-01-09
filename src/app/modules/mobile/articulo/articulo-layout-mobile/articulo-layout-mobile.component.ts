import { Component } from '@angular/core';
import { MobileLayoutComponent } from "../../../../shared/layout-mobile/layout-mobile.component";
import { ArticuloListComponent } from "../../../almacen/articulo/articulo-list/articulo-list.component";

@Component({
  selector: 'app-articulo-layout-mobile',
  imports: [ArticuloListComponent,MobileLayoutComponent],
  templateUrl: './articulo-layout-mobile.component.html',
  styleUrl: './articulo-layout-mobile.component.css'
})
export class ArticuloLayoutMobileComponent {

}
