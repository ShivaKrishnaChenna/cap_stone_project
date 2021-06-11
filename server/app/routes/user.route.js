module.exports = (app) => {
    const users = require('../controllers/user.controller.js');

    // Create
    app.post('/users', users.create);

    // Retrieve all
    app.get('/users', users.findAll);

    // Retrieve a single 
    app.get('/users/:userId', users.findOne);
}