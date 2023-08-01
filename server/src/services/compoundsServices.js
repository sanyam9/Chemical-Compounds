const db = require('../models');

const getAllCompounds = async (offset, limit) => {
  try{
    return await db.Compound.findAndCountAll({
      offset,
      limit,
      order: [['id', 'ASC']],
    });
  }
  catch (err) {
    throw new Error(err);
  }
};

const getCompoundById = async (id) => {
  try {
    return await db.Compound.findByPk(id);
  }
  catch (err) {
    throw new Error(err);
  }

};

const createCompound = async (compound) => {
  try{
    return await db.Compound.create(compound);
  }
  catch (err) {
    throw new Error(err);
  }
};

const updateCompound = async (id, compound) => {
  try{
    return await db.Compound.update(compound, { where: { id }, returning: true, plain: true});
  }
  catch (err) {
    throw new Error(err);
  }
};

const deleteCompound = async (id) => {
  try{
    return await db.Compound.destroy({ where: { id } });
  }
  catch (err) {
    throw new Error(err);
  }
};

const upsertCompounds = async (compounds) => {
  try{
    return await db.Compound.bulkCreate(compounds, { updateOnDuplicate : ['id']});
  }
  catch(err) {
    throw new Error(err);
  }
};

module.exports = {
  getAllCompounds,
  getCompoundById,
  createCompound,
  updateCompound,
  deleteCompound,
  upsertCompounds
};
