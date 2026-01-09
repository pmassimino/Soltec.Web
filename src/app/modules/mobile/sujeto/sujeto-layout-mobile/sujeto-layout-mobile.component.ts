import { Component } from '@angular/core';
import { MobileLayoutComponent } from "../../../../shared/layout-mobile/layout-mobile.component";
import { SujetoListComponent } from '../../../contabilidad/sujeto/sujeto-list/sujeto-list.component';

@Component({
  selector: 'app-articulo-layout-mobile',
  imports: [SujetoListComponent,MobileLayoutComponent],
  templateUrl: './sujeto-layout-mobile.component.html',
  styleUrl: './sujeto-layout-mobile.component.css'
})
export class SujetoLayoutMobileComponent {

}
