const {Router} = require ('express');
const { getTemperamentsFromDB } = require('../controllers/temperamentControllers');


const router = Router();
router.use('/temperament', getTemperamentsFromDB)

module.exports = router;