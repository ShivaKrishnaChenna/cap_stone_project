const Product = require("../models/product.model.js");

// Create and Save a new Product
exports.create = async (req, res) => {
    const imagePath = 'http://localhost:3090/images/' + req.file.filename; // Note: set path dynamically

    if(!req.body.description) {
        return res.status(400).send({
            message: "Product description can not be empty"
        });   
    }

    const product = new Product({
        title: req.body.title, 
        description: req.body.description,
        price: req.body.price,
        imagePath: imagePath,
        fullname: req.body.fullname,
        address: req.body.address,
        phonenumber: req.body.phonenumber,
        status: req.body.status,
        state: req.body.state,
        userid: req.body.userid,
    });

     // Save Product in the database
    //  product.save()
    //  .then(data => {
    //      res.send(data);
    //  }).catch(err => {
    //      res.status(500).send({
    //          message: err.message || "Some error occurred while creating the Product."
    //      });
    //  });

    const createdProduct = await product.save();
    res.status(201).json({
      product: {
        ...createdProduct._doc,
      },
    });
};

// Retrieve and return all products from the database.
exports.findAll = (req, res) => {
  Product.find()
    .then((products) => {
      res.send(products);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products.",
      });
    });
};

// Retrieve and return all products from the database for a specific user.
exports.findAllByUserId = (req, res) => {
  Product.find( { userid:req.params.userid })
    .then((products) => {
      res.send(products);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products.",
      });
    });
};

// Find a single product with a productId
exports.findOne = (req, res) => {
  Product.findById(req.params.productId)
    .then((product) => {
      if (!product) {
        return res.status(404).send({
          message: "Product not found with id " + req.params.productId,
        });
      }
      res.send(product);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Product not found with id " + req.params.productId,
        });
      }
      return res.status(500).send({
        message: "Error retrieving product with id " + req.params.productId,
      });
    });
};

// Update a product identified by the productId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body.description) {
    return res.status(400).send({
      message: "Product description can not be empty",
    });
  }

  // Find product and update it with the request body
  Product.findByIdAndUpdate(
    req.params.productId,
    {
      title: req.body.title || "Untitled Product",
      description: req.body.description,
    },
    { new: true }
  )
    .then((product) => {
      if (!product) {
        return res.status(404).send({
          message: "Product not found with id " + req.params.productId,
        });
      }
      res.send(product);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Product not found with id " + req.params.productId,
        });
      }
      return res.status(500).send({
        message: "Error updating product with id " + req.params.productId,
      });
    });
};

// Delete a product with the specified productId in the request
exports.delete = (req, res) => {
  Product.findByIdAndRemove(req.params.productId)
    .then((product) => {
      if (!product) {
        return res.status(404).send({
          message: "Product not found with id " + req.params.productId,
        });
      }
      res.send({ message: "Product deleted successfully!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "Product not found with id " + req.params.productId,
        });
      }
      return res.status(500).send({
        message: "Could not delete product with id " + req.params.productId,
      });
    });
};
