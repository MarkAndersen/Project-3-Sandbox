const mongoose = require('mongoose');
const { Schema } = mongoose;


const performerSchema = new Schema ({

});

const Performers = mongoose.model('Performer', performerSchema)

module.exports = Performers;