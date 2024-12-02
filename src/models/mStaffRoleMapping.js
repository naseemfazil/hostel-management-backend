// const mStaffRoleMapping = {
//     staffId:Number,
//     roleId:Number,
//     isActive:true,
// }


let mongoose = require('mongoose');

let staffRoleMappingSchema = new mongoose.Schema({
    staffId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Staff',
        required: true,
    },
    roleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role',
        required: true,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
});

staffRoleMappingSchema.set('timestamps', true);

module.exports = mongoose.model('StaffRoleMapping', staffRoleMappingSchema, 'staffRoleMappings');
