
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').del()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {description:'This is TaskOne', notes:"Notes for taskone", complete: false},
        {description:'This is TaskTwo', notes:"Notes for tasktwo", complete: false},
        {description:'This is TaskThree', notes:"Notes for taskthree", complete: false}
      ]);
    });
};
