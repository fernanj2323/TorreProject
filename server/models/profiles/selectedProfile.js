const mongoose = require('mongoose');
const { Schema } = mongoose;

const campSchema = new Schema ({
    name: {type: String},
    email: {type: String},
    country: {type: String},
    selectedStatus:{type: Number}, //0 - unselected, 1 -  selected, 
    color: { tpye: String }, 
})

module.exports = mongoose.model('SelectedProfile', campSchema);