const knex = require("../database");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const expiresIn = "1h";

const UserController = {
  async login(req, res, next) {
    try {
      const { login, password } = req.body;

      const user = await knex("users").where({ login }).first();
      if (!user) throw new Error("User not found.");

      const rightPassword = await bcrypt.compare(password, user.password);
      if (!rightPassword) throw new Error("Wrong password.");

      const token = jwt.sign(user, "it_must_be_on_.env_but_ok", { expiresIn });

      return res.json({ auth: true, token });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = UserController;
