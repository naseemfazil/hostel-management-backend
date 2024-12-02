// const mStaffRoles = {
//     roleName:'',
//     isActive:'',
// }


let mongoose = require('mongoose');

let staffRoleSchema = new mongoose.Schema({
    roleName: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
});

staffRoleSchema.set('timestamps', true);

module.exports = mongoose.model('StaffRole', staffRoleSchema, 'staffRoles');
