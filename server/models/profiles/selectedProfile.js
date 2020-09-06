const mongoose = require('mongoose');
const { Schema } = mongoose;

const campSchema = new Schema ({
    name: {type: String},
    created: {type: String},
    picture: {type: String},
    publicId: {type: String},
    professionalHeadline: {type: String},
    location: {type: String},
    
    selectedStatus:{type: Number}, //0 - unselected, 1 -  selected, 
    color: { tpye: String }, 
})

module.exports = mongoose.model('SelectedProfile', campSchema);