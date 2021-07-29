const { Router } = require("express");

const Validators = require("Validators/health");

const router = new Router();

router.get("/health", Validators.query, (req, res) => {
  return res.send(req.query);
});

router.get("/ping", (req, res) => {
  return res.send({ ping: "pong" });
});

module.exports = router;
