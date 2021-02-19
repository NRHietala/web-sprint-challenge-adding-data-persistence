exports.up = function (knex) {
  return knex.schema
    .createTable("projects", table => {
      table.increments("project_id");
      table.text("project_name", 128).notNullable().unique();
      table.text("project_description", 128);
      table.boolean("project_completed").notNullable().defaultTo(0);
    })
    .createTable("resources", table => {
      table.increments("resource_id");
      table.text("resource_name", 128).notNullable().unique();
      table.text("resource_description", 128);
    })
    .createTable("tasks", table => {
      table.increments("task_id");
      table.text("task_description", 128).notNullable().unique();
      table.text("task_notes", 128);
      table.boolean("task_completed").notNullable().defaultTo(0);
      table.integer("project_id").references("project_id").inTable("projects");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
