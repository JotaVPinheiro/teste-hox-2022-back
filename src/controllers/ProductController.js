const ProductController = {
  async index(req, res, next) {
    try {
      return res.send();
    } catch (error) {
      next(error);
    }
  },

  async create(req, res, next) {
    try {
      return res.send();
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