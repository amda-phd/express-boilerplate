const { Router } = require("express");

const Health = require("Models/health");

const router = new Router();

router.get("/health", async (req, res) => {
  try {
    await Health.sync({ force: true });
    const health = await Health.create({ isHealthy: true });
    return res.send({ api: true, db: health.isHealthy });
  } catch (error) {
    console.log(error);
    return res.send({ api: true, db: false });
  }
});

router.get("/ping", (req, res) => {
  return res.send({ ping: "pong" });
});

module.exports = router;
