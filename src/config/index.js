require('dotenv').config();

const config = {
    PORT: process.env.PORT || 3000,
    API: process.env.API || "api/v1",
    API_DOCS: process.env.API_DOCS || "api-docs",
};

module.exports = config;