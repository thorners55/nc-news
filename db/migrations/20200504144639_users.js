exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.string("username").primary();
    table.string("avatar_url");
    table.string("name");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
