const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
  hospitalName: { type: String, required: true },
  disease: { type: String, required: true },
  price: { type: Number, required: true },
  surgeries: { type: String, required: true },
  location: { type: String, required: true }
});

const Hospital = mongoose.model('Hospital', hospitalSchema);
module.exports = Hospital;
