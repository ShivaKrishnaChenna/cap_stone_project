module.exports = (app) => {
    const users = require('../controllers/user.controller.js');
    const storage = require('../helpers/storage');

    // Create
    app.post('/users', users.create);

    // Create
    app.post('/contacts', users.createContact);

    // Retrieve all
    app.get('/users', users.findAll);

    // Retrieve a single 
    app.get('/users/:userId', users.findOne);

    app.post('/user/:userId',storage, users.update);
}