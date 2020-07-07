const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const express = require("express");
var swaggerRouter = express.Router();

// Swagger Set Up
const options = {
    swaggerDefinition: {
        openapi: "3.0.0",
        showMutatedRequest: true,
        info: {
            title: "Fashion Blog API",
            version: "1.0.0",
            description: "description"
        },
        servers: [
            {
                url: "http://localhost:4000"
            }
        ]
    },
    apis: ['../users/UserRouter.js'],
    basePath: '/'
};

const specs = swaggerJsdoc(options);

swaggerRouter.use("/",swaggerUi.serve);
swaggerRouter.get(
    "/",
    swaggerUi.setup(specs, {

    })
);

module.exports = {swaggerRouter}