const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quoteSchema = new Schema({
    sent:{
    type: String
  }
});

const quotes = mongoose.model('quote', quoteSchema, 'quotes');
module.exports = quotes;