const mongoose = require('mongoose');

const HospitalCostSchema= new mongoose.Schema({
    hospitalName:{ type: String, required: true},
    procedureName:{ type: String, required: true},
    cost:{type: Number, Required: true},
    date: {type: Date, default:Date.now},
});

module.exports = mongoose.model('HospitalCost', HospitalCostSchema);
