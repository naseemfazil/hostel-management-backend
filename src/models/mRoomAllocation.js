// const mRoomAllocation = {
//     roomId:'',
//     customerId:'',
//     checkInDate:'',
//     checkOutDate:'',
//     status:'', // occupied, reserved, under maitenance,
//     occupancyCount:0, 
// }



let mongoose = require('mongoose');

let roomAllocationSchema = new mongoose.Schema({
    roomId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room',
        required: true,
    },
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: true,
    },
    checkInDate: {
        type: Date,
        required: true,
    },
    checkOutDate: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        enum: ['occupied', 'reserved', 'under maintenance'],
        required: true,
    },
    occupancyCount: {
        type: Number,
        required: true,
        min: 1,
    },
});

roomAllocationSchema.set('timestamps', true);

module.exports = mongoose.model('RoomAllocation', roomAllocationSchema, 'roomAllocations');
