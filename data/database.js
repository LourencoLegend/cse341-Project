const dotenv = require('dotenv');   // dotenv is a module that loads environment variables from a .env file into process.env
dotenv.config();                    // dotenv.config() loads the environment variables  from the .env file into process.env

const MongoClient = require('mongodb').MongoClient; // mongodb is a module that allows us to connect to a MongoDB database

let database;                       // database is a variable that will hold the connection to the database

const initDb = (callback) => {      // initDb is a function that will connect to the database   
    if (database) {
        console.log('Database is already initialized!');
        return callback(null, database);
    }
    MongoClient.connect(process.env.MONGODB_URL)
        .then((client) => {
            database = client;
            callback(null, database);
        })
        .catch((err) => {
            callback(err);
        });
};

const getDatabase = () => {               // getDb is a function that will return the connection to the database
    if (!database) {
        throw Error('Database not initialized!');
    }
    return database;
};

module.exports = {
    initDb, getDatabase
};  // module.exports is an object that will be returned when this file is imported    
