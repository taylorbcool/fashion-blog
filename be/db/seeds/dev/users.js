
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          username: 'testUser',
          password: 'testpass'
        },
        {
          id: 2,
          username: 'taytest',
          password: 'password'
        },
        {
          id: 3,
          username: 'user3',
          password: 'password3'
        }
      ]);
    });
};
