const { countryServices } = require('../services');

async function getCountries(req, res) {
    const page = req.query.page;
    const limit = req.query.limit;
    try {
        const result = await countryServices.getCountries({ page, limit });
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

async function getCountryById(req, res) {
    const idParams = req.params.id;
    try {
        const result = await countryServices.getCountryById(idParams);
        if (result.rows.length === 0) {
            res.status(404).json({ message: "Country Not found" });
        } else {
            res.status(200).json(result.rows);
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

async function addCountry(req, res) {
    const { id, iso, name, nicename, iso3, numcode, phonecode } = req.body;
    try {
        if (!id || !iso || !name || !nicename || !phonecode) {
            res.status(400).json({ message: "Bad request" });
        } else {
            const result = await countryServices.addCountry({
                id: parseInt(id),
                iso,
                name,
                nicename,
                iso3,
                numcode: parseInt(numcode),
                phonecode: parseInt(phonecode)
            });
            res.status(201).json({ message: "Data Successfully Created", description: result });
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

async function updateCountry(req, res) {
    const idParams = parseInt(req.params.id);
    const { iso, name, nicename, iso3, numcode, phonecode } = req.body;
    try {
        const cekCountry = await countryServices.getCountryById(idParams);
        if (cekCountry.rows.length === 0) {
            res.status(404).json({ message: "Country Not found" });
        } else {
            const result = await countryServices.updateCountry({
                idParams,
                iso,
                name,
                nicename,
                iso3,
                numcode: parseInt(numcode),
                phonecode: parseInt(phonecode)
            });
            res.status(200).json({ message: "Data Successfully Updated", description: result });
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

async function deleteCountry(req, res) {
    const idParams = parseInt(req.params.id);
    try {
        const cekCountry = await countryServices.getCountryById(idParams);
        if (cekCountry.rows.length === 0) {
            res.status(404).json({ message: "Country Not found" });
        } else {
            const result = await countryServices.deleteCountry(idParams);
            res.status(200).json({ message: "Data Successfully Deleted", description: result });
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {
    getCountries,
    getCountryById,
    addCountry,
    updateCountry,
    deleteCountry
};