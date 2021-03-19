const animals = require("../../../animals.js");
const names = require("../../../names.js");
const colors = require("../../../colors.js");

const randInt = max => Math.floor(Math.random() * Math.floor(max));
const randomItem = collection => collection[randInt(collection.length)];

// randomly generated animal
const randimal = () => ({
    type: randomItem(animals),
    legs: (randInt(3) + 1) * 2, // can be 2, 4, or 6
    color: randomItem(colors),
    name: randomItem(names)
});

// generate N animals
const zoo = (n) => Array.from(Array(n)).map(_ => randimal());

exports.seed = knex => knex("critters").del() // Deletes ALL existing entries
    .then(() => knex("critters").insert(zoo(20)));
