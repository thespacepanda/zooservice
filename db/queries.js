const knex = require('./knex.js');

function Critters() {
    return knex('critters');
}

// *** queries *** //

function getAll() {
    return Critters().select();
}

function getSingle(critterID) {
    return Critters().where("id", parseInt(critterID)).first();
}

function add(critter) {
    return Critters().insert(critter, "id");
}


module.exports = {
    getAll,
    getSingle,
    add
};
