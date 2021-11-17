const mongoose = require('mongoose');
// const db = require('./index.js');
// mongoose.Promise = global.Promise;

const productSchema = new mongoose.Schema({
  id: { type: Number },
  name: { type: String },
  slogan: { type: String },
  description: { type: String },
  category: { type: String },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;