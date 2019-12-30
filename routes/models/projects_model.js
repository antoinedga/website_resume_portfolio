const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectsSchema = new Schema({
    name:{
        type: String
    }, 
    tech: {
        type: [String]
    },
    description: {
        type: [String]
    },
    semester:{
        type: String
    }

});

const proj = mongoose.model('project', projectsSchema, 'projects');
module.exports = proj;