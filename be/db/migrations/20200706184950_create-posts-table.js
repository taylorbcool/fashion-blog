
exports.up = function(knex) {
  return knex.schema
  .createTable('posts', table => {
    table
      .increments()
    table
      .integer('user_id')
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
    table
      .string('description', 255)
      .notNullable()
    table
      .specificType('items', 'text[]')
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('posts')
};
