const router = require("koa-router")();

const critters = [];

const route = router
      .get("home", "/", home)
      .post("log-critter", "/critter", logCritter);

async function home(ctx) {
    ctx.body = "Hello World";
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
    critters.push(critter);
    console.dir(critters);
    ctx.body = critter;
}

module.exports = {
    route
};
