const { compoundSchema, querySchema, idSchema} = require('./schema');

const validateCompound = (req, res, next) => {
  const { error } = compoundSchema.validate(req.body);
  if (error) {
    res.status(400).json({ message: error.message });
  } else {
    next();
  }
};

const validateQuery = (req, res, next) => {
  const { error } = querySchema.validate(req.query);
  if (error) {
    res.status(400).json({ message: error.message });
  } else {
    next();
  }
};

const validateId = (req, res, next) => {
  const { error } = idSchema.validate(req.params);
  if (error) {
    res.status(400).json({ message: error.message });
  } else {
    next();
  }
};

module.exports = {
  validateCompound,
  validateQuery,
  validateId
};





