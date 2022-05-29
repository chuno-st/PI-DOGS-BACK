const { Router } = require('express');
const breedRoutes = require('./breedRoutes.js')
const temperamentRoutes = require('./temperamentRoutes.js')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/dogs', breedRoutes )
router.use('/temperament', temperamentRoutes )



module.exports = router;
