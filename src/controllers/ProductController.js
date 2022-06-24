const knex = require("../database");
const yup = require("yup");

const productSchema = yup.object().shape({
  name: yup.string().required(),
  manufactureDate: yup.date().required(),
  perishable: yup.boolean().required(),
  expirationDate: yup.date().required(),
  price: yup.number().required(),
});

const updateProductSchema = yup.object().shape({
  name: yup.string().notRequired(),
  manufactureDate: yup.date().notRequired(),
  perishable: yup.boolean().notRequired(),
  expirationDate: yup.date().notRequired(),
  price: yup.number().notRequired(),
});

const filterProperties = (data) => {
  let { name, manufactureDate, perishable, expirationDate, price } = data;

  if (perishable === false) expirationDate = null;

  return {
    name,
    manufactureDate,
    perishable,
    expirationDate,
    price,
  };
};

const ProductController = {
  async index(req, res, next) {
    try {
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
      await productSchema.validate(req.body);

      const product = filterProperties(req.body);

      if (
        product.perishable === true &&
        product.manufactureDate > product.expirationDate
      )
        throw new Error("manufacturedDate can't be after expirationDate.");

      if (product.price < 0) throw new Error("price can't be negative.");

      await knex("products").insert(product);

      return res.status(201).json(product);
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    try {
      await updateProductSchema.validate(req.body);

      const { id } = req.params;

      const updatedProps = filterProperties(req.body);

      const product = await knex("products").where({ id }).first();

      if (!product) throw new Error("Product not found.");

      if (Object.values(updatedProps).every((x) => x === undefined))
        throw new Error("No properties to update provided.");

      await knex("products").update(updatedProps).where({ id });

      return res.status(201).send();
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    try {
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
