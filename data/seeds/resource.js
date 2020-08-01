exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("resource")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("resource").insert([
        {
          name: "ResourceOne",
          description: "This is resourceone",
        },
        {
          name: "ResourceTwo",
          description: "This is resourcetwo",
        },
        {
          name: "ResourceThree",
          description: "This is resourcethree",
        },
      ]);
    });
};
