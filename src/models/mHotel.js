// const mHotel= {
//     name:'',
//     address:'',
//     isActive:true,
// }


let mongoose = require('mongoose');

let hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
});

hotelSchema.set('timestamps', true);

module.exports = mongoose.model('Hotel', hotelSchema, 'hotels');
