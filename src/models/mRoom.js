// const mRoom = {
//     hotelId:'',
//     roomName:'',
//     roomSize:'',
//     bedSize:'',
//     maxOccupany:0,
//     isAcAvailabe:true,
//     isActive:true,
// }


let mongoose = require('mongoose');

let roomSchema = new mongoose.Schema({
    hotelId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hotel',
        required: true,
    },
    roomName: {
        type: String,
        required: true,
    },
    roomSize: {
        type: String,
    },
    bedSize: {
        type: String,
    },
    maxOccupancy: {
        type: Number,
        required: true,
        min: 1,
    },
    isAcAvailable: {
        type: Boolean,
        default: true,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
});

roomSchema.set('timestamps', true);

module.exports = mongoose.model('Room', roomSchema, 'rooms');
