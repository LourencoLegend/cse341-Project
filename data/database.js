// These functions make sure our app connects to the database and can access its data when needed.

// Load the 'dotenv' tool to manage environment variables
const dotenv = require("dotenv");
dotenv.config();

// Import the 'MongoClient' from the 'mongodb' library
const MongoClient = require("mongodb").MongoClient;

// Initialize a variable to store the database connection
let database;

// Create a function to initialize the database
const initDb = (callback) => {
    // Check if the database is already initialized
    if (database) {
        console.log("Database is already initialized!");
        return callback(null, database);
    }

    // Connect to the MongoDB database using the provided URI
    MongoClient.connect(process.env.MONGODB_URI)
        .then((client) => {
            // Store the database connection
            database = client;
            callback(null, database);
        })
        .catch((err) => {
            callback(err);
        });
};

// Create a function to get the initialized database
const getDatabase = () => {
    // If the database is not initialized, throw an error
    if (!database) {
        throw new Error("Database not initialized");
    }
    return database;
};

// Export the functions to be used in other parts of your application
module.exports = {
    initDb,
    getDatabase
};
