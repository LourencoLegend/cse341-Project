// This code sets up different paths for our app and tells it what to do when someone visits them. 
// It's like a map for our app's routes.

// Import necessary modules
const router = require("express").Router();

// Define a route that responds with "Hello World" for the root path
router.get("/", (req, res) => {
    res.send("Hello World");
});

// Use the "/contacts" route defined in the "contacts" module
router.use("/contacts", require("./contacts"));

router.use("/", require("./swagger"));

// Export the router to be used by other parts of your application
module.exports = router;