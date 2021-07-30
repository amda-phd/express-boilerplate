const mongoose = require("mongoose");

const healthSchema = new mongoose.Schema({
  isHealthy: {
    type: Boolean,
    default: true,
  },
});

const Health = new mongoose.model("Health", healthSchema);
module.exports = Health;
