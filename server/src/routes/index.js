const router = require('express').Router();
const compoundsController = require('../controllers/compoundsController');

router.route('/compounds')
  .get(compoundsController.getAllCompounds)
  .post(compoundsController.addCompound);

router.route('/compounds/:id')
  .get(compoundsController.getCompoundById)
  .put(compoundsController.updateCompoundById)
  .delete(compoundsController.deleteCompoundById);

module.exports = router;