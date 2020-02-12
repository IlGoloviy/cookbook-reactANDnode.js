const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  name: String,
  ingredient: Array,
  cook: String,
  date: Date,
  version: Array
});

module.exports = mongoose.model('Recipe', recipeSchema, 'recipe');