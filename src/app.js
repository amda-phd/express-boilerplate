const express = require("express");

const health = require("./routers/health");

const app = express();
app.use(express.json());

app.use(health);

module.exports = app;
