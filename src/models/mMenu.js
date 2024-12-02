// const menu = {
//     menuName:"",
//     menuDescription:"",
//     menuIconName:"",
// }


let mongoose = require('mongoose');

let menuSchema = new mongoose.Schema({
    menuName: {
        type: String,
        required: true,
    },
    menuDescription: {
        type: String,
    },
    menuIconName: {
        type: String,
    },
});

menuSchema.set('timestamps', true);

module.exports = mongoose.model('Menu', menuSchema, 'menus');
