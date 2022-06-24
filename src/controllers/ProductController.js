const knex = require("../database");

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
    const filterProperties = (data) => {
      let {
        name = null,
        manufactureDate = null,
        perishable = null,
        expirationDate = null,
        price = null,
      } = data;

      if (perishable === false) expirationDate = null;

      return {
        name,
        manufactureDate,
        perishable,
        expirationDate,
        price,
      };
    };

    const checkForNullValues = (product) => {
      for (let property in product) {
        if (property === "expirationDate" && !product.perishable) continue;

        if (product[property] === null)
          throw new Error(`${property} can't be null.`);
      }
    };

    try {
      const product = filterProperties(req.body);

      checkForNullValues(product);

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
      return res.send();
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    try {
      return res.send();
    } catch (error) {
      next(error);
    }
  },
};

module.exports = ProductController;
