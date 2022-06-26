const knex = require("../database");
const yup = require("yup");
const jwt = require("jsonwebtoken");

const productSchema = yup.object().shape({
  name: yup.string().required(),
  manufacturedDate: yup.date().required(),
  perishable: yup.boolean().required(),
  expirationDate: yup.date().required(),
  price: yup.number().required(),
});

const updateProductSchema = yup.object().shape({
  name: yup.string().notRequired().min(1),
  manufacturedDate: yup.date().notRequired(),
  perishable: yup.boolean().notRequired(),
  expirationDate: yup.date().notRequired(),
  price: yup.number().notRequired(),
});

const filterProperties = (data) => {
  let { name, manufacturedDate, perishable, expirationDate, price } = data;

  if (perishable === false) expirationDate = null;

  return {
    name,
    manufacturedDate,
    perishable,
    expirationDate,
    price,
  };
};

const checkBadValues = (product) => {
  if (product.manufacturedDate > product.expirationDate)
    throw new Error("manufacturedDate can't be after expirationDate.");

  if (product.price < 0) throw new Error("price can't be negative.");
};

const ProductController = {
  async index(req, res, next) {
    try {
      const token = req.headers["x-access-token"];
      if (!token) throw new Error("No jwt provided.");
      await jwt.verify(token, "it_must_be_on_.env_but_ok");

      const { id } = req.params;
      const query = knex("products");

      if (id) query.where({ id });

      const products = await query;
      return res.send(products);
    } catch (error) {
      next(error);
    }
  },

  async create(req, res, next) {
    try {
      const token = req.headers["x-access-token"];
      if (!token) throw new Error("No jwt provided.");
      await jwt.verify(token, "it_must_be_on_.env_but_ok");

      await productSchema.validate(req.body);

      const product = filterProperties(req.body);

      checkBadValues(product);

      await knex("products").insert(product);
      return res.status(201).json(product);
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    try {
      const token = req.headers["x-access-token"];
      if (!token) throw new Error("No jwt provided.");
      await jwt.verify(token, "it_must_be_on_.env_but_ok");

      await updateProductSchema.validate(req.body);

      const { id } = req.params;

      const updatedProps = filterProperties(req.body);

      const product = await knex("products").where({ id }).first();

      if (!product) throw new Error("Product not found.");

      if (Object.values(updatedProps).every((x) => x === undefined))
        throw new Error("No properties to update provided.");

      checkBadValues(updatedProps);

      if (
        product.perishable == false &&
        (updatedProps.perishable == false ||
          updatedProps.perishable == undefined)
      )
        updatedProps.expirationDate = null;

      await knex("products").update(updatedProps).where({ id });
      return res.status(201).send();
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    try {
      const token = req.headers["x-access-token"];
      if (!token) throw new Error("No jwt provided.");
      await jwt.verify(token, "it_must_be_on_.env_but_ok");

      const { id } = req.params;

      const product = await knex("products").where({ id }).first();

      if (!product) throw new Error("Product not found.");

      await knex("products").del().where({ id });
      return res.status(201).send();
    } catch (error) {
      next(error);
    }
  },
};

module.exports = ProductController;
