const { Router } = require('express');
const { countryControllers } = require('../controllers');

const router = Router();

router.get('/', (req, res) => {
    countryControllers.getCountries(req, res);
});

router.get('/:id', (req, res) => {
    countryControllers.getCountryById(req, res);
});

router.post('/', (req, res) => {
    countryControllers.addCountry(req, res);
});

router.put('/:id', (req, res) => {
    countryControllers.updateCountry(req, res);
});

router.delete('/:id', (req, res) => {
    countryControllers.deleteCountry(req, res);
});

module.exports = router;