import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import ProductDetail from "./product-details.component"

export default function ProductList({ products }) {
  const loadingProducts = false
  return (
    <div>
      <Fragment>
        {products.map((product) => {
          let borderClass = "border-b";
          let item = product.product
          return (
            <ProductDetail selectedProduct={item}></ProductDetail>
          );
        })}
        {loadingProducts && <div>Loading ...</div>}        
      </Fragment>
    </div>
  );
}
