exports.up = async function (knex) {
  await knex.schema.createTable("project", (table) => {
    table.increments("id");
    table.text("name").notNull();
    table.text("description").notNull();
    table.integer("complete",false);
  });

  await knex.schema.createTable("resource", (table) => {
    table.increments("id");
    table.text("name").notNull();
    table.text("description");
  });

  await knex.schema.createTable("task", (table) => {
    table.increments("id");
    table.text("description").notNull();
    table.text("notes").notNull();
    table.integer("complete",false);
  });

  await knex.schema.createTable("task_resource", (table) => {
      table.increments("id")
    table.integer("task_id").references("id").inTable("task");
    table.integer("resource_id").references("id").inTable("resource");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("project");
  await knex.schema.dropTableIfExists("resource");
  await knex.schema.dropTableIfExists("task");
  await knex.schema.dropTableIfExists("task_resource");
};
