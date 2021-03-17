import { Component } from '@angular/core';
import { assetUrl } from '../single-spa/asset-url';

import '@nx-example/shared/header';

@Component({
  selector: 'products-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title= "products";
  productImageURL = assetUrl("images/");
}
