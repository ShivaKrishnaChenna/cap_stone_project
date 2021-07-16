const User = require("../models/user.model.js");
const Contact = require("../models/contact.model.js");

// Create a User
exports.create = (req, res) => {
  if (!req.body.email) {
    return res.status(400).send({
      message: "User can not be empty",
    });
  }

    const user = new User({
        name: req.body.name, 
        email: req.body.email,
        password: req.body.password,
        isAdmin: false
    });

  // Save Product in the database
  user
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    });
};

exports.createContact = (req, res) => {

    const contact = new Contact({
        firstName: req.body.firstName, 
        lastName: req.body.lastName, 
        email: req.body.email,
        comment: req.body.comment,
    });

  // Save Product in the database
  contact
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    });
};


// Retrieve and return all users from the database.
exports.findAll = (req, res) => {
  User.find()
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving users.",
      });
    });
};

// Find a single user with a userId
exports.findOne = (req, res) => {
  User.findById(req.params.userId)
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "user not found with id " + req.params.userId,
        });
      }
      res.send(user);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "User not found with id " + req.params.userId,
        });
      }
      return res.status(500).send({
        message: "Error retrieving user with id " + req.params.productId,
      });
    });
};

// Update a product identified by the productId in the request
exports.update = (req, res) => {

  const imageSrcPath = 'http://localhost:3090/images/' + req.file.filename; // Note: set path dynamically

  const user = new User({
    _id: req.params.userId,
    name: req.body.name, 
    email: req.body.email,
    password: req.body.password,
    imagePath: imageSrcPath,
    isAdmin: false,
});

  // Find product and update it with the request body
  User.findByIdAndUpdate(
    req.params.userId,
    user,
    { new: true }
  )
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "User not found with id " + req.params.userId,
        });
      }
      res.send(user);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "User not found with id " + req.params.userId,
        });
      }
      return res.status(500).send({
        message: "Error updating user with id " + req.params.userId + err,
      });
    });
};
