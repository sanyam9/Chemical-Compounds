/* eslint-disable no-undef */
const { describe, it, expect } = require('@jest/globals');
const compoundsServices = require('../../src/services/compoundsServices');
const compoundsController = require('../../src/controllers/compoundsController');
const mockCompounds = require('../mockData/compounds.json');

describe('Compounds Controller', () => {
  describe('getAllCompounds', () => {
    it('should return a list of compounds', async () => {
      const req = { query: { pg: '1' } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const limit = 3;
      const offset = (req.query.pg - 1) * limit;
      const compounds = { rows: mockCompounds.compounds.slice(offset,limit) };
      jest.spyOn(compoundsServices, 'getAllCompounds').mockResolvedValue(compounds);
      await compoundsController.getAllCompounds(req, res);
      expect(compoundsServices.getAllCompounds).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(compounds);
    });

    it('should return a message if no compounds are found', async () => {
      const req = { query: { pg: 1 } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      jest.spyOn(compoundsServices, 'getAllCompounds').mockResolvedValue({ rows: [] });
      await compoundsController.getAllCompounds(req, res);
      expect(compoundsServices.getAllCompounds).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ message: 'No compounds found' });
    });

    it('should throw an error if getAllCompounds fails', async () => {
      const req = { query: { pg: 1 } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      jest.spyOn(compoundsServices, 'getAllCompounds').mockRejectedValue(new Error('Error'));
      await compoundsController.getAllCompounds(req, res);
      expect(compoundsServices.getAllCompounds).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: 'Error' });
    });
  });

  describe('getCompoundById', () => {
    it('should return a compound', async () => {
      const req = { params: { id: 1 } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      jest.spyOn(compoundsServices, 'getCompoundById').mockResolvedValue(mockCompounds.compounds[0]);
      await compoundsController.getCompoundById(req, res);
      expect(compoundsServices.getCompoundById).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockCompounds.compounds[0]);
    });

    it('should return a message if no compound is found', async () => {
      const req = { params: { id: 1 } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      jest.spyOn(compoundsServices, 'getCompoundById').mockResolvedValue(null);
      await compoundsController.getCompoundById(req, res);
      expect(compoundsServices.getCompoundById).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ message: 'Compound not found' });
    });

    it('should throw an error if getCompoundById fails', async () => {
      const req = { params: { id: 1 } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      jest.spyOn(compoundsServices, 'getCompoundById').mockRejectedValue(new Error('Error'));
      await compoundsController.getCompoundById(req, res);
      expect(compoundsServices.getCompoundById).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: 'Error' });
    });
  });

  describe('addCompound', () => {
    it('should return a new compound', async () => {
      const req = { body: mockCompounds.compounds[0] };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      jest.spyOn(compoundsServices, 'createCompound').mockResolvedValue(mockCompounds.compounds[0]);
      await compoundsController.addCompound(req, res);
      expect(compoundsServices.createCompound).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(mockCompounds.compounds[0]);
    });

    it('should throw an error if addCompound fails', async () => {
      const req = { body: mockCompounds.compounds[0] };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      jest.spyOn(compoundsServices, 'createCompound').mockRejectedValue(new Error('Error'));
      await compoundsController.addCompound(req, res);
      expect(compoundsServices.createCompound).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: 'Error' });
    });
  });

  describe('updateCompoundById', () => {
    it('should return an updated compound', async () => {
      const req = { params: { id: 1 }, body: mockCompounds.compounds[0] };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      jest.spyOn(compoundsServices, 'updateCompound').mockResolvedValue([null, 1]);
      jest.spyOn(compoundsServices, 'getCompoundById').mockResolvedValue(mockCompounds.compounds[0]);
      await compoundsController.updateCompoundById(req, res);
      expect(compoundsServices.updateCompound).toHaveBeenCalled();
      expect(compoundsServices.getCompoundById).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockCompounds.compounds[0]);
    });

    it('should return a message if no compound is found', async () => {
      const req = { params: { id: 1 }, body: mockCompounds.compounds[0] };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      jest.spyOn(compoundsServices, 'updateCompound').mockResolvedValue([null, 0]);
      await compoundsController.updateCompoundById(req, res);
      expect(compoundsServices.updateCompound).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ message: 'Compound not found' });
    });

    it('should throw an error if updateCompoundById fails', async () => {
      const req = { params: { id: 1 }, body: mockCompounds.compounds[0] };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      jest.spyOn(compoundsServices, 'updateCompound').mockRejectedValue(new Error('Error'));
      await compoundsController.updateCompoundById(req, res);
      expect(compoundsServices.updateCompound).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: 'Error' });
    });
  });

  describe('deleteCompoundById', () => {
    it('should return a message confirming deletion', async () => {
      const req = { params: { id: 1 } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      jest.spyOn(compoundsServices, 'deleteCompound').mockResolvedValue(1);
      await compoundsController.deleteCompoundById(req, res);
      expect(compoundsServices.deleteCompound).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(204);
      expect(res.json).toHaveBeenCalledWith({ message: 'Compound deleted' });
    });

    it('should return a message if no compound is found', async () => {
      const req = { params: { id: 1 } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      jest.spyOn(compoundsServices, 'deleteCompound').mockResolvedValue(null);
      await compoundsController.deleteCompoundById(req, res);
      expect(compoundsServices.deleteCompound).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ message: 'Compound not found' });
    });
    
    it('should throw an error if deleteCompoundById fails', async () => {
      const req = { params: { id: 1 } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      jest.spyOn(compoundsServices, 'deleteCompound').mockRejectedValue(new Error('Error'));
      await compoundsController.deleteCompoundById(req, res);
      expect(compoundsServices.deleteCompound).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: 'Error' });
    });
  });
});