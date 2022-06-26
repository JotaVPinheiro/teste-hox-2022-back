exports.up = async (knex) =>
  knex.schema.createTable("products", (table) => {
    table.increments("id");
    table.string("name").notNullable();
    table.date("manufacturedDate").notNullable();
    table.boolean("perishable").notNullable();
    table.date("expirationDate");
    table.float("price").notNullable();

    table.timestamps(0, 1, 1);
  });

exports.down = async (knex) => knex.schema.dropTable("products");
