
exports.up = function(knex) {
  return knex.schema.createTable("projects", tbl => {
      tbl.increments("id");
      tbl.string("project_name", 128).notNullable().unique();
      tbl.text("description");
      tbl.boolean("completed").defaultTo(false);
  })
  .createTable("resources", tbl => {
      tbl.increments("id");
      tbl.string("resource_name", 128).notNullable().unique();
      tbl.text("description");
  })
  .createTable("tasks", tbl => {
      tbl.increments("id");
      tbl.string("description").notNullable();
      tbl.text("notes");
      tbl.boolean("completed").defaultTo(false);
      tbl.integer("project_id")
      .unsigned()
      .notNullable()
      .references("projects.id")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects")
};
