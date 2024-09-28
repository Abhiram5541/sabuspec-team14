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

/* GET 'Location info' page */
const locationInfo = (req, res) => {
  res.render('location-info', { title: 'Location Info' });
};

/* GET 'Add review' page */
const addReview = (req, res) => {
  res.render('location-review-form', { title: 'Add Review' });
};

/* GET 'Contact' page */
const contactInfo = (req, res) => {
  res.render('contact', { title: 'Contact Us' });
};

module.exports = {
  homelist,
  locationInfo,
  addReview,
  contactInfo // Corrected here to maintain naming consistency
};
