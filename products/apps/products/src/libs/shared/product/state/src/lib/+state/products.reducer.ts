import { ProductsAction } from './products.actions';

import { products } from '@nx-example/shared/product/data';
import { Product } from '@nx-example/shared/product/types';

export const PRODUCTS_FEATURE_KEY = 'products';
export interface ProductsState {
  products: Product[];
}

export interface ProductsPartialState {
  readonly [PRODUCTS_FEATURE_KEY]: ProductsState;
}

export const initialState: ProductsState = {
  products: products
};

export function productsReducer(
  state: ProductsState = initialState,
  action: ProductsAction
): ProductsState {
  console.log(action.type)
  console.log(state)
  switch (action.type) {
    case action.type:
      return state;
    default: {
      return state;
    }
  }
}
