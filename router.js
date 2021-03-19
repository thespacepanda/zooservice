const router = require("koa-router")();
const CritterController = require("./critter.js");

const Critters = new CritterController();

const route = router
      .get("get-critters", "/critter", async ctx => {
          if (Object.keys(ctx.query).length) {
              // implement search here
          }
          else {
              ctx.body = await Critters.get();
          }
      })
      .get("get-critter", "/critter/:id", async ctx => {
          ctx.body = await Critters.get(ctx.params.id);
      })
      .post("log-critter", "/critter", async ctx => {
          const critterOrSnark = await Critters.post(ctx.request.body);
          // if controller gives us snark we send it with a 400 status
          ctx.assert(typeof(critterOrSnark) !== "string", 400, critterOrSnark);
          // otherwise we know it's the critter we just inserted
          ctx.body = critterOrSnark;
      })
      .put("update-critter", "/critter/:id", async ctx => {
          const critterOrSnark = await Critters.update(ctx.params.id, ctx.request.body);
          // same story here since we need to validate the amount of legs we're getting
          ctx.assert(typeof(critterOrSnark) !== "string", 400, critterOrSnark);
          ctx.body = critterOrSnark;
      })
      .del("remove-critter", "/critter/:id", async ctx => {
          // controller either returns 1 or 0 in this case (# of deleted rows)
          ctx.body = await Critters.remove(ctx.params.id);
      });

module.exports = {
    route
};
