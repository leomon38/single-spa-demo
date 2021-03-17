const port = 5001

const getCartItems = () =>
  fetch(`http://localhost:${port}/api/cart`).then((resp) => {
    console.log(resp);
    return resp.json()
});

const addToCart = (product) =>
  fetch(`http://localhost:${port}/api/add`, {
    method: "POST",
    body: JSON.stringify({
      product,
    }),
    headers: {
      "content-type": "application/json",
    },
  }).then((resp) => resp.json());

const checkout = () =>
  fetch(`http://localhost:${port}/api/checkout`, {
    method: "POST",
    body: JSON.stringify({}),
    headers: {
      "content-type": "application/json",
    },
  }).then((resp) => resp.json());

const removeItem = (product) =>
  fetch(`http://localhost:${port}/api/remove/product`, {
    method: "POST",
    body: product.id,
    headers: {
      "content-type": "application/json",
    },
}).then((resp) => resp.json());


module.exports = {
  checkout,
  getCartItems,
  addToCart,
  removeItem
};
