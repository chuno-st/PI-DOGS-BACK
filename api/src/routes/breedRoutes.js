const {Router} = require('express');
const { getById, createBreed, getBreeds } = require('../controllers/breedControllers');

const router = Router();
router.use('/dogs/:id', getById);
router.use('/dogs', getBreeds);
router.use('/dog', createBreed);

module.exports = router;
