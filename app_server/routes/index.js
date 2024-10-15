const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');
const mongoose = require('mongoose');

// Replace 'your_database_url' with the actual MongoDB URL
mongoose.connect('mongodb://localhost/sabuspec', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});
mongoose.connection.on('error', (err) => {
  console.log('MongoDB connection error:', err);
});

/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/Number', ctrlLocations.locationInfo);
router.get('/Rims', ctrlLocations.locationInfoRims);
router.get('/PPF', ctrlLocations.locationInfoPpf);
router.get('/Exhaust', ctrlLocations.locationInfoExhaust);

/* Review page routes */
router.get('/location-review-form', ctrlLocations.reviewPage);  // Render review form + submitted reviews
router.post('/location-review-form', ctrlLocations.addReview);  // Handle review form submission

/* Alias for review form page */
router.get('/review', ctrlLocations.reviewPage);  // Alias route for the same review page

/* Contact page */
router.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact Us' });
});

/* About page */
router.get('/about', ctrlOthers.about);

module.exports = router;
