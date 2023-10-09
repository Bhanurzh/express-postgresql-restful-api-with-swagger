const { countryRepositories } = require('../repositories');

async function getCountries(params) {
    const { page, limit } = params;
    const response = await countryRepositories.getCountries({ page, limit });
    return response;
}

async function getCountryById(idParams) {
    const response = await countryRepositories.getCountryById(idParams);
    return response;
}

async function addCountry(data) {
    const { id, iso, name, nicename, iso3, numcode, phonecode } = data;
    const response = await countryRepositories.addCountry({ id, iso, name, nicename, iso3, numcode, phonecode });
    return response;
}

async function updateCountry(data) {
    const { idParams, iso, name, nicename, iso3, numcode, phonecode } = data;
    const response = await countryRepositories.updateCountry({ idParams, iso, name, nicename, iso3, numcode, phonecode });
    return response;
}

async function deleteCountry(idParams) {
    const response = await countryRepositories.deleteCountry(idParams);
    return response;
}

module.exports = {
    getCountries,
    getCountryById,
    addCountry,
    updateCountry,
    deleteCountry
};