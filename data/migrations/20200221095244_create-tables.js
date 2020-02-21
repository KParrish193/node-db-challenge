
exports.up = function(knex) {
    return knex.schema
    
    .createTable("projects", col => {
        col.increments()
        col 
            .text("project_name", 128)
            .notNullable()
            .unique()
            .index()
        col 
            .text("project_description", 500)
            .notNullable()
            .unique()
            .index()
        col 
            .boolean("project_is_completed")
            .notNullable()
            .defaultTo(false)
        })

    .createTable("bridge", col => {
        col
            .primary(["project_id", "resource_id"])
        col
            .integer("project_id")
            .notNullable()
            .unsigned()
            .references("id")
            .inTable("projects")
        col
            .integer("resource")
            .notNullable()
            .unsigned()
            .references("id")
            .inTable("resources")
        })

    .createTable("resources", col => {
        col.increments()
        col 
            .text("resource_name", 128)
            .notNullable()
            .unique()
            .index()
        col 
            .text("resource_description", 500)
            .notNullable()
            .unique()
            .index()
        })

    .createTable("tasks", col => {
        col.increments()
        col
            .text("step_number")
            .notNullable();
        col 
            .text("task_description", 128)
            .notNullable()
        col 
            .text("task_notes", 500)
        col 
            .boolean("task_is_completed")
            .notNullable()
            .defaultTo(false)
        col
            .integer("project")
            .notNullable()
            .unsigned()
            .references("id")
            .inTable("projects")
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("tasks")
        .dropTableIfExists("projects")
        .dropTableIfExists("resources")
        .dropTableIfExists("bridge")
};