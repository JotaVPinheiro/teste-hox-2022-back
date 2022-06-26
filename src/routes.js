const express = require("express");
const routes = express.Router();
const ProductController = require("./controllers/ProductController");
const UserController = require("./controllers/UserController");

routes.get("/products/:id?", ProductController.index);
routes.post("/products", ProductController.create);
routes.put("/products/:id", ProductController.update);
routes.delete("/products/:id", ProductController.delete);

routes.get("/login", UserController.login);

module.exports = routes;
