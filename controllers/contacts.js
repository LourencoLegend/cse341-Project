// These functions help handle contact-related requests, making sure you see the right information.

// Import the required modules
const mongodb = require("../data/database");
const ObjectId = require("mongodb").ObjectId;

// Define the 'getAll' function, which fetches all contacts from the 'contacts' collection
const getAll = async (req, res) => {
    const result = await mongodb.getDatabase().db("professionalData").collection("contacts").find();
    result.toArray().then((contacts) => {
        // Set the response headers and send the contacts as JSON
        res.setHeader("Content-type", "application/json");
        res.status(200).json(contacts);
    });
}
// Define the 'getSingle' function, which fetches a single contact by its ID
const getSingle = async (req, res) => {
    // Parse the user's ID from the request parameters
    const userId = new ObjectId(req.params.id);
    // Find the contact with the specified ID
    const result = await mongodb.getDatabase().db("professionalData").collection("contacts").find({ _id: userId });
    result.toArray().then((contacts) => {
        // Set the response headers and send the first contact (if found) as JSON
        res.setHeader("Content-Type", "application/json");
        res.status(200).json(contacts[0]);
    });
}

const createContact = async (req, res)=>{
    
    const user = { firstName:req.body.firstName,
                 lastName:req.body.lastName,
                 email: req.body.email,
                 favoriteColor: req.body.favoriteColor,
                 birthday: req.body.birthday
                };
    const result = await mongodb.getDatabase().db("professionalData").collection("contacts").insertOne(user);
    if (result.acknowledged){
        res.status(204).json({ message: "Successfully created user" });
    }else{
        res.status(500).json({error:"Some error occurred updating the user"});
      }
}    
    
const updateContact = async (req, res)=>{
    const userId = new ObjectId(req.params.id);
    const user = { firstName:req.body.firstName,
                 lastName:req.body.lastName,
                 email: req.body.email,
                 favoriteColor: req.body.favoriteColor,
                 birthday: req.body.birthday
                };
    const result = await mongodb.getDatabase().db("professionalData").collection("contacts").replaceOne({ _id: userId }, user);
    if (result.modifiedCount > 0){
        res.status(204).json({ message: "Successfully updated user" });
    }else{
        res.status(500).json({error:"Some error occurred updating the user"});
      }
}    


const deleteContact = async (req, res) =>{
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db("professionalData").collection("contacts").deleteOne({_id: userId});
        if (result.deletedCount > 0){
            res.status(204).json({ message: "Successfully deleted user" });
        }else{
            res.status(500).json({error:"Some error occurred updating the user"});
        }
}


// Export the functions to be used in your routes
module.exports = {
    getAll,
    getSingle,
    createContact,
    updateContact,
    deleteContact
}
