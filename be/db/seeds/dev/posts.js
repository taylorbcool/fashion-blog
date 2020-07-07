
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {
          id: 1,
          user_id: 1,
          description: '',
          items: []
        },
        {
          id: 2,
          user_id: 1,
          description: '',
          items: []
        },
        {
          id: 3,
          user_id: 2,
          description: '',
          items: []
        }
      ]);
    });
};
