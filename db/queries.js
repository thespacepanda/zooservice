const knex = require('./knex.js');

function Critters() {
    return knex('critters');
}

// *** queries *** //

function getAll() {
    return Critters().select();
}


module.exports = {
    getAll: getAll
};
