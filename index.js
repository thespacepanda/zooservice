const Koa = require("koa");
const koaBody = require("koa-body");
const { route } = require("./router");

const app = new Koa();

app.use(koaBody());
app.use(route.routes());

const server = app.listen(3000);

module.exports = {
    server
};
