const compoundsServices = require('../services/compoundsServices');

const getAllCompounds = async (req, res) => {
  try {
    const compounds = await compoundsServices.getAllCompounds();
    res.status(200).json(compounds);
  }
  catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCompoundById = async (req, res) => {
  try {
    const compound = await compoundsServices.getCompoundById(req.params.id);
    res.status(200).json(compound);
  }
  catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addCompound = async (req, res) => {
  try {
    const newCompound = await compoundsServices.addCompound(req.body);
    res.status(201).json(newCompound);
  }
  catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateCompoundById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCompound = await compoundsServices.updateCompoundById(id, req.body);
    
    if(updatedCompound[0] === 0) {
      return res.status(404).json({ message: `Compound with ${id} not found` });
    }
    res.status(200).json(updatedCompound[1]);
  }
  catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteCompoundById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCompound = await compoundsServices.deleteCompoundById(id);
    if (deletedCompound) {
      return res.status(204).json({ message: 'Compound deleted'});
    } 
    res.status(404).json({ message: `Compound with ${id} not found` });
  }
  catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllCompounds,
  getCompoundById,
  addCompound,
  updateCompoundById,
  deleteCompoundById
};