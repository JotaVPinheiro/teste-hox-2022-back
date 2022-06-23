const express = require("express");
const routes = express.Router();
const ProductController = require("./controllers/ProductController");

routes.get("/products", ProductController.index);
routes.post("/products", ProductController.create);
routes.put("/products", ProductController.update);
routes.delete("/products", ProductController.delete);

module.exports = routes;
