const { Router } = require("express");

const router = new Router();

router.get("/health", (req, res) => {
  return res.send("Healthy!");
});

module.exports = router;
