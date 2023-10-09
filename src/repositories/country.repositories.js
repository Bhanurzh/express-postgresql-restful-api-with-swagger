const pool = require('../utils/database');

function getCountries(params) {
    return new Promise((resolve, reject) => {
        const page = params.page || 1;
        const limit = params.limit || 10;
        pool.query(
            `SELECT * FROM country OFFSET ${(page - 1) * limit} LIMIT ${limit}`,
            (error, result) => {
                if (error) {
                    reject(error);
                }
                resolve(result);
            }
        );
    });
}

function getCountryById(idParams) {
    return new Promise((resolve, reject) => {
        pool.query(
            `SELECT * FROM country WHERE id = $1`,
            [idParams],
            (error, result) => {
                if (error) {
                    reject(error);
                }
                resolve(result);
            }
        );
    });
}

function addCountry(data) {
    return new Promise((resolve, reject) => {
        const { id, iso, name, nicename, iso3, numcode, phonecode } = data;
        pool.query(
            `INSERT INTO country (id, iso, name, nicename, iso3, numcode, phonecode) VALUES
            ($1, $2, $3, $4, $5, $6, $7)`,
            [id, iso, name, nicename, iso3, numcode, phonecode],
            (error, result) => {
                if (error) {
                    console.error("Error while adding country:", error);
                    reject(error);
                } else {
                    resolve(result.rows);
                }
            }
        );
    });
}


function updateCountry(data) {
    return new Promise((resolve, reject) => {
        const { idParams, iso, name, nicename, iso3, numcode, phonecode } = data;
        pool.query(
            `UPDATE country SET 
            iso = $1, name = $2, nicename = $3, iso3 = $4, numcode = $5, phonecode = $6 
            WHERE id = $7`,
            [iso, name, nicename, iso3, numcode, phonecode, idParams],
            (error, result) => {
                if (error) {
                    console.error("Error while updating country:", error);
                    reject(error);
                } else {
                    resolve(result.rows);
                }
            }
        );
    });
}

function deleteCountry(idParams) {
    return new Promise((resolve, reject) => {
        pool.query(
            `DELETE FROM country WHERE id = $1`,
            [idParams],
            (error, result) => {
                if (error) {
                    console.error("Error while deleting country:", error);
                    reject(error);
                } else {
                    resolve(result.rows);
                }
            }
        );
    });
}


module.exports = {
    getCountries,
    getCountryById,
    addCountry,
    updateCountry,
    deleteCountry
};