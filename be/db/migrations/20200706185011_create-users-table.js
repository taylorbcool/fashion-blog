
exports.up = function(knex) {
  return knex.schema
  .createTable('users', table => {
    table
      .increments()
    table
      .varchar('username', 255)
      .notNullable()
      .unique()
      .index()
    table
      .varchar('password', 255)
      .notNullable()
    table
      .varchar('email', 255)
      .notNullable()
      .unique()
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('users')
};
