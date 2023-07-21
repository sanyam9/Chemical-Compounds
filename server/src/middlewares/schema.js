const joi = require('joi');

const compoundSchema = joi.object().keys({
  id: joi.number().integer().min(1).optional(),
  compoundName: joi.string().required(),
  compoundDescription: joi.string().required(),
  compoundImage: joi.string().required()
});

const querySchema = joi.object().keys({
  pg: joi.number().integer().min(1).optional(),
});

const idSchema = joi.object().keys({
  id: joi.number().integer().min(1).required(),
});
  
module.exports = {
  compoundSchema,
  querySchema,
  idSchema
};
