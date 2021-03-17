import { Component } from '@angular/core';
import { assetUrl } from 'src/single-spa/asset-url';

@Component({
  selector: 'home-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'home';
  imgUrl = assetUrl("bg-home.png")
}
