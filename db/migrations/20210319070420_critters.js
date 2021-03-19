// create the critter table
exports.up = knex => knex.schema.createTable("critters", table => {
    table.increments();
    table.string("type").notNullable();
    table.integer("legs").notNullable();
    table.string("color").notNullable();
    table.string("name").notNullable();
});

// destroy the critter table
exports.down = knex => knex.schema.dropTable("critters");
