const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "countries",
    password: "Bismillah27",
    port: 5432,
});

module.exports = pool;