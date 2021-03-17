import React, { useEffect, useReducer, useState } from "react";
import ProductList from "../product-list/product-list.component.js";
import { checkout, getCartItems } from "../services/cart";
import { Button } from "react-bootstrap";


const initialState = {
  items: []
};

export function CartPage() {

  const [total, setTotal] = useState()
  const [products, setProducts] = useState([])
  useEffect(() =>
    getCartItems().then((cart) => {    
        let { total, products } = cart
        total = total/100
        setTotal(total),
        console.log(products.length)
        setProducts(products)      
      }
    )
  , [])

  function preCheckout() {
    alert(`Checkout done! Total Amount ${total}`)
    checkout()
    setProducts([])
  }


  return (
    <div>
      <div className="flex">
        <div className="p-6 w-1/3">
 
            <ProductList
              products={products}
            />
        </div>
        <div className="w-2/3 p-6 border-l-2 border-white">          
          <div  style={{
                        display: "flex",
                        position: "absolute",
                        right: "250px",
                        padding: "1em",
                        border: "1px solid #ccc",
                        borderRadius: 5,
                      }}>
            <p><span>Total: ${total}.00</span></p>
            <p>
              <Button
                  onClick={() => preCheckout()}
                  style={{ width: "100%" }}            
              > CheckOut
              </Button></p>
          </div>
        </div>
      </div>
    </div>
  );
}
