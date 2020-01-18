const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectsSchema = new Schema({
    name:{
        type: String,
        required: true
    }, 
    tech: {
        type: [String],
        required: true
    },
    description: {
        type: [String],
        required: true
    },
    semester:{
        type: String,
        required: true
    }

});

const proj = mongoose.model('project', projectsSchema, 'projects');
module.exports = proj;