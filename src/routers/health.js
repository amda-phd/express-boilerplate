const { Router } = require("express");

const Validators = require("Validators/health");
const Health = require("Models/health");

const router = new Router();

router.get("/health", Validators.query, async (req, res) => {
  try {
    if (req.query.mongo) {
      await Health.deleteMany();
      const health = await Health.create({});

      if (!health) {
        throw Error();
      }
    }
    return res.send(req.query);
  } catch (error) {
    console.log(error);
    return res.send({ api: true, mongo: false });
  }
});

router.get("/ping", (req, res) => {
  return res.send({ ping: "pong" });
});

module.exports = router;
