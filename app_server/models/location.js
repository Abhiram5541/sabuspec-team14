const mongoose = require('mongoose');

// Schema for opening times
const openingTimeSchema = new mongoose.Schema({
    days: {
        type: String,
        required: true,
    },
    opening: String,
    closing: String,
    closed: {
        type: Boolean,
        required: true,
    },
});

// Schema for reviews
const reviewSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true, // Make author required
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5,
    },
    reviewText: {
        type: String,
        required: true, // Make reviewText required
    },
    createdOn: {
        type: Date,
        default: Date.now,
    },
});

// Schema for locations
const locationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true, // Make address required
    },
    rating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5,
    },
    facilities: {
        type: [String], // Include facilities related to automotive customization
        enum: ['Custom Number Plates', 'Custom Rims', 'Paint Protection Film (PPF)', 'Custom Exhaust Systems'],
        required: true, // Ensure at least one facility is selected
    },
    coords: {
        type: [Number],
        index: '2dsphere',
    },
    openingTimes: [openingTimeSchema],
    reviews: [reviewSchema],
});

// Export the Location model
mongoose.model('Location', locationSchema);
