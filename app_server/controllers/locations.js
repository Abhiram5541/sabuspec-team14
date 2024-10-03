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

/*'Location info'*/
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

/*'Add review' */
const addReview = (req, res) => {
  res.render('location-review-form', { title: 'Add Review' });
};

/*'Contact'*/
const contactInfo = (req, res) => {
  res.render('contact', { title: 'Contact Us' });
};

module.exports = {
  homelist,
  locationInfo,
  locationInfoRims,
  locationInfoPpf,
  locationInfoExhaust,
  addReview,
  contactInfo 
};
