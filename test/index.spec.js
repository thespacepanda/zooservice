process.env.NODE_ENV = 'test';

const chai = require("chai");
const chaiHttp = require("chai-http");
const { server } = require("../index");
const expect = chai.expect;
const knex = require("../db/knex.js");

chai.use(chaiHttp);

describe("Critter API", () => {

    beforeEach(function(done) {
        knex.migrate.rollback()
            .then(function() {
                knex.migrate.latest()
                    .then(function() {
                        return knex.seed.run()
                            .then(function() {
                                done();
                            });
                    });
            });
    });

    afterEach(function(done) {
        knex.migrate.rollback()
            .then(function() {
                done();
            });
    });

    after(() => {
        server.close();
    });

    describe("POST /critter", () => {
        it("logs a purple giraffe named Zed", done => {
            const zed = {
                id: undefined,
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
                    expect({ ...res.body, id: undefined }).to.deep.equal(zed);
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

    describe("GET /critter", () => {
        it("gets all critters", done => {
            chai
                .request(server)
                .get("/critter")
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    done();
                });
        });
    });

    describe('GET /critter/:id', function() {
        it('should return a single critter', function(done) {
            chai
                .request(server)
                .get('/critter/1')
                .end(function(err, res) {
                    expect(res).to.have.status(200);
                    done();
                });
        });
    });

});
