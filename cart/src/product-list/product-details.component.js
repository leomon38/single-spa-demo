import React from "react";
import ProductAttribute from "./product-attribute.component.js";
import './product-details.component.css'
import { assetUrl } from '../single-spa/asset-url'

export default function ProductDetail({ selectedProduct }) {

  return (
    <div className="selectedProduct">
      {selectedProduct !== undefined ? (
        <div className="selectedProduct__content">
          <ProductAttribute>
            <ProductAttribute.Title>Item Name</ProductAttribute.Title>
            <ProductAttribute.Value>{selectedProduct.name}</ProductAttribute.Value>
            <img className="selectedProduct_thumbnail" src={getAssetImageUrl(selectedProduct.image)}></img>
          </ProductAttribute>
          <ProductAttribute>
            <ProductAttribute.Title>Description:</ProductAttribute.Title>
            <ProductAttribute.Value>
              {selectedProduct.Description?'':'Information TBA'}
            </ProductAttribute.Value>
          </ProductAttribute>
          <ProductAttribute>
            <ProductAttribute.Title>Price</ProductAttribute.Title>
            <ProductAttribute.Value>{getFormattedPrice(selectedProduct.price)}</ProductAttribute.Value>
          </ProductAttribute> 
          <ProductAttribute>
            <ProductAttribute.Title>Quantity</ProductAttribute.Title>
            <ProductAttribute.Value>
              <input value={selectedProduct.quantity}></input>
            </ProductAttribute.Value>
          </ProductAttribute>
        </div>
      ) : (
        <div>No Product in Cart selected</div>
      )}
    </div>
  );
}

function getFormattedPrice(value) {
  return value/100 + ".00"
}


function getAssetImageUrl(img) {
  return assetUrl(`/images/${img}`)
}