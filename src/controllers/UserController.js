const knex = require("../database");
const bcrypt = require("bcrypt");

const UserController = {
  async login(req, res, next) {
    try {
      const { login, password } = req.body;

      const user = await knex("users").where({ login }).first();
      if (!user) throw new Error("User not found.");

      const rightPassword = await bcrypt.compare(password, user.password);
      if (!rightPassword) throw new Error("Wrong password.");

      return res.json({});
    } catch (error) {
      next(error);
    }
  },
};

module.exports = UserController;
