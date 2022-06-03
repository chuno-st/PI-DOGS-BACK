const {Router} = require('express');
const { getById, createBreed, getBreeds } = require('../controllers/breedControllers');

const router = Router();
router.use('/dogs/:id', getById);
router.use('/dog', createBreed);
router.use('/dogs', getBreeds);

module.exports = router;
