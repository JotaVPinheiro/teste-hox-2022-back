const bcrypt = require("bcrypt");

exports.seed = async (knex) => {
  await knex("users").del();
  await knex("users").insert(await users());
};

const users = async () => [
  {
    login: "admin@hox.rs",
    password: await bcrypt.hash("admin", 10),
  },
];
