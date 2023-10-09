const { Router } = require('express');
const countryRoutes = require('./country.routes');

const router = Router();

router.use('/countries', countryRoutes);

module.exports = router;