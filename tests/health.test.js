const request = require("supertest");

const app = require("@app");
const Health = require("Models/health");

describe("/health", () => {
  it("Returns empty object when called without query", (done) => {
    request(app).get("/health").expect(200, {}, done());
  });

  describe("?api=true", () => {
    it("Checks only API's status", (done) => {
      request(app).get("/health?api=true").expect(200, { api: true }, done());
    });

    describe("&db=true", () => {
      it("Also checks the database's status", async (done) => {
        await request(app)
          .get("/health?api=true&db=true")
          .expect(200, { api: true, db: true });
        const health = await Health.findAll();
        expect(health[0].isHealthy).toBeTruthy(done());
      });
    });
  });

  describe("Unexpected query", () => {
    it("Returns coherent error", (done) => {
      request(app).get("/health?caca=true").expect(400, done());
    });
  });
});

describe("/ping", () => {
  it("pongs", (done) => {
    request(app).get("/ping").expect(200, { ping: "pong" }, done());
  });
});
