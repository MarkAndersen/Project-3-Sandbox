const mongoose = require('mongoose');
const { Schema } = mongoose;


const orderSchema = ({
    purchaseDate: {
        type: Date,
        default: Date.now
      },
    products: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Booking'
        }
      ]

    // subtotal: {
    //     type: Number
    // } 
    // $aggregate
    // pulling in User?
})

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;