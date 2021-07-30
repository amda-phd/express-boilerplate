const Joi = require("joi");
const validator = require("express-joi-validation").createValidator({});

module.exports = {
  query: validator.query(
    Joi.object({
      api: Joi.boolean(),
      sql: Joi.boolean(),
    })
  ),
};
