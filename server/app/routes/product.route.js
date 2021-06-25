module.exports = (app) => {
    const products = require('../controllers/product.controller.js');

    const storage = require('../helpers/storage');

    // Create 
    app.post('/products', storage, products.create);

    // Retrieve all 
    app.get('/products', products.findAll);

    // Retrieve all 
    app.get('/products/:userid', products.findAllByUserId);

    // Retrieve a single
    app.get('/product/:productId', products.findOne);

    // Update 
    app.put('/products/:productId', products.update);

    // Delete 
    app.get('/products/delete/:productId', products.delete);
}