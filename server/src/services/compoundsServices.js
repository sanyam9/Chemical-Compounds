const db = require('../models');

const getAllCompounds = async () => {
  return await db.Compound.findAll();
};

const getCompoundById = async (id) => {
  return await db.Compound.findByPk(id);
};

const createCompound = async (compound) => {
  return await db.Compound.create(compound);
};

const updateCompound = async (id, compound) => {
  return await db.Compound.update(compound, { where: { id }, returning: true });
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
