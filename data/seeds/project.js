
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project').del()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {name: 'ProjectOne', description:'This is projectone', complete: false},
        {name: 'ProjectTwo', description:'This is projecttwo', complete: false},
        {name: 'ProjectThree', description:'This is projectthree', complete: false}
      ]);
    });
};
