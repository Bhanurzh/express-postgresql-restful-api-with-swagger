const express = require('express');
const { API, API_DOCS } = require('./config');
const routes = require('./routes');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const apiDocumentation = require('./apidocs.json');

function createServer() {
    const app = express();

    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use(`/${API}`, routes);
    app.use(
        `/${API_DOCS}`,
        swaggerUi.serve,
        swaggerUi.setup(apiDocumentation, {
            explorer: true
        })
    );

    return app;
}

module.exports = createServer;