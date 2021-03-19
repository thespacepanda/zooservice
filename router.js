const router = require("koa-router")();
const queries = require("./db/queries.js");

const route = router
      .get("get-critters", "/critter", getCritters)
      .get("get-critter", "/critter/:id", getCritter)
      .post("log-critter", "/critter", logCritter)
      .put("update-critter", "/critter/:id", updateCritter)
      .del("remove-critter", "/critter/:id", removeCritter);

async function getCritters(ctx) {
    console.dir(ctx.query);
    if (Object.keys(ctx.query).length) {
        console.log("we got some queries, ladies.");
    }
    const critters = await queries.getAll();
    ctx.body = critters;
}

async function getCritter(ctx) {
    const critter = await queries.getSingle(ctx.params.id);
    ctx.body = critter;
}

async function logCritter(ctx) {
    const critter = ctx.request.body;
    const validCritter = critter.hasOwnProperty("type")
        && critter.hasOwnProperty("legs")
        && critter.hasOwnProperty("color")
        && critter.hasOwnProperty("name");
    ctx.assert(validCritter, 400, "critter's missin' a few parts there, bud.");
    // if the assertion fails execution is halted;
    // no need for an additional if check here
    const newCritter = await queries.add(critter);
    ctx.body = await queries.getSingle(newCritter);
}

async function updateCritter(ctx) {
    const critter = await queries.update(ctx.params.id, ctx.request.body);
    ctx.body = await queries.getSingle(ctx.params.id);
}

async function removeCritter(ctx) {
    const removedCritters = await queries.remove(ctx.params.id);
    ctx.body = removedCritters;
}

module.exports = {
    route
};
