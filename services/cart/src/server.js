const express = require("express");
const { isConstructorDeclaration } = require("typescript");

const cart = require("./model/cart")

console.log(cart)

const getPrice = ({ base }) =>
  Math.round(Object.values(base).reduce((a, n) => a + n) / 6);


const app = express();
const port = 5001;

app.use(require("body-parser").json());
app.use(require("cors")());
app.use("/images", express.static("public"));

app.post("/api/add", function (req, res) {
  //const product = JSON.parse(req.body.toString('utf8').replace(/^\uFFFD/, ''));
  cart.addToCart(req.body.product)
});

app.get("/api/products", function (req, res) {
  const products = cart.get();
  res.status(200).send(products);
});

app.post("/api/remove/product", function (req, res) {
  const product_id = req.body.id
  cart.removeItem(product_id)
  res.status(200).send({
    message: "Item removed"
  });
});

app.get("/api/cart", function (req, res) {
  res.status(200).send(cart.get());
});

app.post("/api/checkout", function (req, res) {
  const checkout_total = cart.checkout();
  res.sendStatus(200).send(checkout_total);
});

app.listen(port, () =>
  console.log(`Product service listening at http://localhost:${port}`)
);
