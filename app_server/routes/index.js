const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');

/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/Number', ctrlLocations.locationInfo);  

/* Location info specific for rims */
router.get('/Rims', ctrlLocations.locationInfoRims);

router.get('/PPF', ctrlLocations.locationInfoPpf);

router.get('/Exhaust', ctrlLocations.locationInfoExhaust);

/* Review page */
router.get('/review', (req, res) => {
    res.render('location-review-form', { title: 'Add Review' });
});

/* Contact page */
router.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact Us' });
});

/* Other pages */
router.get('/about', ctrlOthers.about);

module.exports = router;
