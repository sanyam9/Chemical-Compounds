/* eslint-disable no-undef */
const { describe, it, expect } = require('@jest/globals');
const compoundsServices = require('../../src/services/compoundsServices');
const db = require('../../src/models');
const mockCompounds = require('../mockData/compounds.json');

describe('Compounds Services', () => {
  describe('getAllCompounds', () => {
    it('should return a list of compounds', async () => {
      const limit = 3;
      const offset = 0;
      const compounds = { rows: mockCompounds.compounds.slice(offset,limit) };
      jest.spyOn(db.Compound, 'findAndCountAll').mockResolvedValue(compounds);
      const result = await compoundsServices.getAllCompounds(offset, limit);
      expect(db.Compound.findAndCountAll).toHaveBeenCalled();
      expect(result).toEqual(compounds);
    });

    it('should throw an error if getAllCompounds fails', async () => {
      jest.spyOn(db.Compound, 'findAndCountAll').mockRejectedValue(new Error('Error'));
      await expect(compoundsServices.getAllCompounds()).rejects.toThrow('Error');
    });
  });

  describe('getCompoundById', () => {
    it('should return a compound', async () => {
      jest.spyOn(db.Compound, 'findByPk').mockResolvedValue(mockCompounds.compounds[0]);
      const result = await compoundsServices.getCompoundById(1);
      expect(db.Compound.findByPk).toHaveBeenCalled();
      expect(result).toEqual(mockCompounds.compounds[0]);
    });

    it('should throw an error if getCompoundById fails', async () => {
      jest.spyOn(db.Compound, 'findByPk').mockRejectedValue(new Error('Error'));
      await expect(compoundsServices.getCompoundById(1)).rejects.toThrow('Error');
    });
  });

  describe('createCompound', () => {
    it('should return a new compound', async () => {
      const newCompound = { name: 'New Compound' };
      jest.spyOn(db.Compound, 'create').mockResolvedValue(newCompound);
      const result = await compoundsServices.createCompound(newCompound);
      expect(db.Compound.create).toHaveBeenCalled();
      expect(result).toEqual(newCompound);
    });

    it('should throw an error if createCompound fails', async () => {
      jest.spyOn(db.Compound, 'create').mockRejectedValue(new Error('Error'));
      await expect(compoundsServices.createCompound()).rejects.toThrow('Error');
    });
  });

  describe('updateCompound', () => {
    it('should return an updated compound', async () => {
      const updatedCompound = mockCompounds.compounds[0];
      jest.spyOn(db.Compound, 'update').mockResolvedValue([1, updatedCompound]);
      const result = await compoundsServices.updateCompound(1, updatedCompound);
      expect(db.Compound.update).toHaveBeenCalled();
      expect(result[1]).toEqual(updatedCompound);
    });

    it('should throw an error if updateCompound fails', async () => {
      jest.spyOn(db.Compound, 'update').mockRejectedValue(new Error('Error'));
      await expect(compoundsServices.updateCompound(1)).rejects.toThrow('Error');
    });
  });

  describe('deleteCompound', () => {
    it('should return a deleted compound', async () => {
      jest.spyOn(db.Compound, 'destroy').mockResolvedValue(1);
      const result = await compoundsServices.deleteCompound(1);
      expect(db.Compound.destroy).toHaveBeenCalled();
      expect(result).toEqual(1);
    });

    it('should throw an error if deleteCompound fails', async () => {
      jest.spyOn(db.Compound, 'destroy').mockRejectedValue(new Error('Error'));
      await expect(compoundsServices.deleteCompound(1)).rejects.toThrow('Error');
    });
  });
});