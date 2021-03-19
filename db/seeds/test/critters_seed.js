exports.seed = knex => knex("critters").del() // Deletes ALL existing entries
    .then(() => knex("critters").insert([{ type: "giraffe", name: "bob", color: "blue", legs: 4 }]));
