const chai = require("chai");
const chaiHttp = require("chai-http");
const { server } = require("../index");
const expect = chai.expect;

chai.use(chaiHttp);

describe("Basic routes", () => {
    after(() => {
        server.close();
    });

    it("should get HOME", done => {
        chai
            .request(server)
            .get("/")
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.text).equal("Hello World");
                done();
            });
    });

    it("logs a purple giraffe named Zed", done => {
        const zed = {
            type: "giraffe",
            legs: 4,
            color: "purple",
            name: "Zed"
        };
        chai
            .request(server)
            .post("/critter")
            .set("content-type", "application/json")
            .send(zed)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.deep.equal(zed);
                done();
            });
    });

    it("tries unsuccessfully to log a colorless animal", done => {
        const zed = {
            type: "giraffe",
            legs: 4,
            name: "Zed"
        };
        chai
            .request(server)
            .post("/critter")
            .set("content-type", "application/json")
            .send(zed)
            .end((err, res) => {
                expect(res).to.have.status(400);
                expect(res.text).equal("critter's missin' a few parts there, bud.");
                done();
            });
    });
});
