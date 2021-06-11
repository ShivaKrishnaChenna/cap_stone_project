module.exports = (app) => {
    const products = require('../controllers/product.controller.js');

    const storage = require('../helpers/storage');

    // Create 
    app.post('/products', storage, products.create);

    // Retrieve all 
    app.get('/products', products.findAll);

    // Retrieve a single
    app.get('/products/:productId', products.findOne);

    // Update 
    app.put('/products/:productId', products.update);

    // Delete 
    app.get('/products/delete/:productId', products.delete);
}