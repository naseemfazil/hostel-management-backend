// const mRoomCleaning = {
//     roomId: '',
//     staffId: '',
//     status: '',
//     createdAt: '', // cleaning done At
//     updatedAt: '',
//     createdBy: '',
//     updatedBy: '',
// }


let mongoose = require('mongoose');

let roomCleaningSchema = new mongoose.Schema({
    roomId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room',
        required: true,
    },
    staffId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Assuming the staff is a user in the 'User' collection
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'in progress', 'completed'],
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
    },
    updatedAt: {
        type: Date,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // User who created the cleaning request
        required: true,
    },
    updatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // User who updated the cleaning status
    },
});

roomCleaningSchema.set('timestamps', true);

module.exports = mongoose.model('RoomCleaning', roomCleaningSchema, 'roomCleanings');
