const express = require("express");

const products = require("../data/product_seeds");


const app = express();
const port = 5003;

app.use(require("body-parser").json());
app.use(require("cors")());
app.use("/images", express.static("public/images"));

app.get("/api/product/id", function (req, res) {
  const qId = req.query.id;

  res.status(200).send(products.getProductById(qId) || null);
});

app.get("/api/products", function (req, res) {
  const q = (req.query.q || "").toLowerCase();
  res.status(200).send(
    products
  );
});


app.listen(port, () =>
  console.log(`Product service listening at http://localhost:${port}`)
);
