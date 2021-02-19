exports.up = function (knex) {
  return knex.schema
    .createTable("projects", table => {
      table.increments("project_id");
      table.text("project_name").notNullable().unique();
      table.text("project_description");
      table.boolean("project_completed").notNullable().defaultTo(0);
    })
    .createTable("resources", table => {
      table.increments("resource_id");
      table.text("resource_name").notNullable().unique();
      table.text("resource_description");
    })
    .createTable("tasks", table => {
      table.increments("task_id");
      table.text("task_description").notNullable();
      table.text("task_notes");
      table.boolean("task_completed").notNullable().defaultTo(0);
      table
        .integer("project_id")
        .notNullable()
        .references("project_id")
        .inTable("projects");
    })
    .createTable("project_resources", table => {
      table
        .integer("project_id")
        .notNullable()
        .references("project_id")
        .inTable("projects");
      table
        .integer("resource_id")
        .notNullable()
        .references("resource_id")
        .inTable("resources");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
