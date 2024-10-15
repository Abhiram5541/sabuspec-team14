const Review = require('../models/review');  // Import the Review model

/* 'Home List' */
const homelist = (req, res) => {
  res.render('locations-list', {
    title: 'SabuSpec Automotive Customization',
    pageHeader: {
      title: 'SabuSpec',
      strapline: 'Redefining Automotive Personalization'
    },
    locations: [
      {
        name: 'Number Plates',
        imageUrl: '/stylesheets/plate.jpg'
      },
      {
        name: 'Rims',
        imageUrl: '/stylesheets/rims.jpg'
      },
      {
        name: 'PPF',
        imageUrl: '/stylesheets/ppf.jpg'
      },
      {
        name: 'Exhaust Systems',
        imageUrl: '/stylesheets/exhaust.jpg'
      }
    ]
  });
};

/* 'Submit review' - Handle review submission and save to MongoDB */
const addReview = async (req, res) => {
  const { name, email, style, message } = req.body;

  try {
    // Save the review to MongoDB
    const newReview = new Review({ name, email, style, message });
    await newReview.save();

    // Redirect back to the review page after submission
    res.redirect('/location-review-form');
  } catch (err) {
    console.error('Error saving review:', err);
    res.status(500).send('Internal Server Error');
  }
};

/* 'Review Page' - Render the review form and display all reviews from MongoDB */
const reviewPage = async (req, res) => {
  try {
    // Fetch all reviews from MongoDB
    const reviews = await Review.find({}).sort({ createdAt: -1 });

    // Pass the reviews array to the view
    res.render('location-review-form', { title: 'Add Review', reviews });
  } catch (err) {
    console.error('Error fetching reviews:', err);
    res.status(500).send('Internal Server Error');
  }
};

/* 'Location info' */
const locationInfo = (req, res) => {
  res.render('location-info', { title: 'Location Info' });
};

const locationInfoRims = (req, res) => {
  res.render('location-info_rims', { title: 'Location Info Rims' });
};

const locationInfoPpf = (req, res) => {
  res.render('location-info_Ppf', { title: 'Location Info Ppf' });
};

const locationInfoExhaust = (req, res) => {
  res.render('location-info_exhaust', { title: 'Location Info Exhaust' });
};

/* 'Contact' */
const contactInfo = (req, res) => {
  res.render('contact', { title: 'Contact Us' });
};

module.exports = {
  homelist,
  addReview,
  reviewPage,
  locationInfo,
  locationInfoRims,
  locationInfoPpf,
  locationInfoExhaust,
  contactInfo
};
