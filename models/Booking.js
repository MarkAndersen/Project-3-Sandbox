const mongoose = require('mongoose');
const { Schema } = mongoose;


const bookingSchema = ({
    type: {
        type: String
    },
    duration: {
        type: Number
    },
    price: {
        type: Number
    }

});


const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;