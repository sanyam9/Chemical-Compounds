const db = require('../models');

const getAllCompounds = async (offset, limit) => {
  return await db.Compound.findAndCountAll({
    offset,
    limit,
    order: [['id', 'ASC']],
  });
};

const getCompoundById = async (id) => {
  return await db.Compound.findByPk(id);
};

const createCompound = async (compound) => {
  return await db.Compound.create(compound);
};

const updateCompound = async (id, compound) => {
  return await db.Compound.update(compound, { where: { id }, returning: true, plain: true});
};

const deleteCompound = async (id) => {
  return await db.Compound.destroy({ where: { id } });
};

module.exports = {
  getAllCompounds,
  getCompoundById,
  createCompound,
  updateCompound,
  deleteCompound,
};
