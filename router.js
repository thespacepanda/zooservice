const router = require("koa-router")();
const queries = require("./db/queries.js");

const route = router
      .get("get-critters", "/critter", getCritters)
      .post("log-critter", "/critter", logCritter);

async function getCritters(ctx) {
    try {
        const critters = await queries.getAll();
        ctx.body = critters;
    }
    catch (e) {
        ctx.status(500);
        console.dir(e);
    }
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
    ctx.body = critter;
}

module.exports = {
    route
};
