import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { select, Store } from '@ngrx/store';
import { concatMap, map } from 'rxjs/operators';
import { assetUrl } from '../single-spa/asset-url';

import {
  getProduct,
  getProductsState,
  ProductsPartialState
} from '@nx-example/shared/product/state';
import '@nx-example/shared/product/ui';
import { Product } from '@nx-example/shared/product/types';
import { addToCart } from "@nx-example/shared/product/service";

@Component({
  selector: 'nx-example-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.scss']
})
export class ProductDetailPageComponent implements OnInit {
  product = this.route.paramMap.pipe(
    map(paramMap => paramMap.get('productId')),
    concatMap(productId =>
      this.store.pipe(select(getProductsState), select(getProduct, productId))
    )
  );
  constructor(
    private store: Store<ProductsPartialState>,
    private route: ActivatedRoute
  ) {}

  assetURL = assetUrl("images/");

  add(product: Product) {
    addToCart(product)
    alert(`${product.name} Added to cart`)
  }

  ngOnInit() {}
}
