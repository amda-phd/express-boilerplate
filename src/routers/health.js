const { Router } = require("express");

const Health = require("Models/health");
const Validators = require("Validators/health");

const router = new Router();

router.get("/health", Validators.query, async (req, res) => {
  try {
    if (req.query.db) {
      await Health.sync({ force: true });
      await Health.create({ isHealthy: true });
    }

    return res.send(req.query);
  } catch (error) {
    console.log(error);
    return res.send({ api: req.quey.api, sql: false });
  }
});

router.get("/ping", (req, res) => {
  return res.send({ ping: "pong" });
});

module.exports = router;
