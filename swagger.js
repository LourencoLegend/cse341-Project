// This script automates the generation of Swagger documentation for an API, 
// making it easier for developers to understand and interact with the API endpoints.

// Importing the 'swagger-autogen' package
const swaggerAutogen = require('swagger-autogen')();

// Defining the basic structure of the Swagger documentation
const doc = {
  info: {
    title: 'My API',
    description: 'Description'
  },
  host: 'https://cse341-s9c8.onrender.com'
};

// Specifying the output file for the generated Swagger documentation
const outputFile = './swagger-output.json';

// Defining the routes to be documented (in this case, only './routes/index.js')
const routes = ['./routes/index.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

// Generating Swagger documentation based on the provided configuration
swaggerAutogen(outputFile, routes, doc);
