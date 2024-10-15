const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

// Use environment variable for the database URI or default to localhost
const dbURI = process.env.MONGODB_URI || "mongodb://localhost:27017/sabuspec";

// Connect to MongoDB
mongoose.connect(dbURI, { useNewUrlParser: true});

// Connection event listeners
mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${dbURI}`);
});

mongoose.connection.on('error', err => {
    console.log('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});

// Require the Review and Location models
require('./review');
require('./location'); // Ensure you have the location model as well

const gracefulShutdown = function (msg, callback) {
    mongoose.connection.close(function () {
        console.log('Mongoose disconnected through ' + msg);
        callback();
    });
};

// Handle process termination signals
process.once('SIGUSR2', function () {
    gracefulShutdown('nodemon restart', function () {
        process.kill(process.pid, 'SIGUSR2');
    });
});
process.on('SIGINT', function () {
    gracefulShutdown('app termination', function () {
        process.exit(0);
    });
});
process.on('SIGTERM', function() {
    gracefulShutdown('Heroku app shutdown', function () {
        process.exit(0);
    });
});
