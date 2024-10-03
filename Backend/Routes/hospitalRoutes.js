const express = require('express');
const router = express.Router();
const Hospital = require('../Models/Hospital');

router.post('/', async (req, res) => {
  const { hospitalName, disease, price, surgeries, location } = req.body;
  try {
    const newHospital = new Hospital({ hospitalName, disease, price, surgeries, location });
    const savedHospital = await newHospital.save();
    res.status(201).json(savedHospital);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const hospitals = await Hospital.find();
    res.status(200).json(hospitals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put('/:id', async (req, res) => {
  const { hospitalName, disease, price, surgeries, location } = req.body;
  try {
    const updatedHospital = await Hospital.findByIdAndUpdate(req.params.id, { hospitalName, disease, price, surgeries, location }, { new: true });
    res.status(200).json(updatedHospital);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Hospital.findByIdAndDelete(req.params.id);
    res.status(204).json({ message: 'Hospital deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
