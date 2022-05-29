const {Router} = require('express');
const { getAllBreeds } = require('../controllers/breedControllers');


const router = Router();
router.use('/', getAllBreeds)



module.exports = router;