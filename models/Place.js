const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlaceSchema = new Schema({
  name: String,
  city: String,
  address: String,
  latitude: String,
  longitude: String,
  type: String
});

const Place = mongoose.model('Place', PlaceSchema);

module.exports = Place;
