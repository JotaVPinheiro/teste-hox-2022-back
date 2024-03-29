module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./tmp/sqlite.db",
    },
    migrations: {
      tableName: "knex_migrations",
      directory: `${__dirname}/src/database/migrations`,
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`,
    },
  },
};
