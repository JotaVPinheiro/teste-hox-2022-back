exports.up = (knex) =>
  knex.schema.createTable("users", (table) => {
    table.increments("id");
    table.string("login").notNullable();
    table.string("password").notNullable();

    table.timestamps(0, 1, 1);
  });

exports.down = (knex) => knex.schema.dropTable("users");
