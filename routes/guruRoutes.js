const express = require('express');
const router = express.Router();
const guruController = require('../controllers/guruController');

router.post('/guru', guruController.create);
router.get('/guru', guruController.getAll);
router.get('/guru/:id', guruController.getById);
router.put('/guru/:id', guruController.update);
router.delete('/guru/:id', guruController.delete);

module.exports = router;
