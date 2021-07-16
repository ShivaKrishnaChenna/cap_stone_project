module.exports = (app) => {
    const users = require('../controllers/claim.controller.js');

    // Create
    app.post('/claim', users.create);

    // Retrieve all
    app.get('/claims', users.findAll);

    // Retrieve a single 
    app.get('/claim/:claimId', users.findOne);
}