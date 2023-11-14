
// This code sets up a route for serving Swagger UI, a tool for visualizing and interacting with an API's documentation. 
// The Swagger documentation is provided from a JSON file (swagger-output.json). The route is configured to be 
// accessible at '/api-docs', allowing developers to easily explore and understand the API specifications.

// Importing necessary dependencies for API documentation
const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger-output.json');

// Setting up route for serving Swagger UI
router.use('/api-docs', swaggerUi.serve);

// Setting up route for displaying Swagger documentation
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

// Exporting the router for use in the main application
module.exports = router;
