const express = require('express');
const HospitalCost = require('../Models/HospitalCost');

const router = express.Router();
router.get('/', async (req, res) => {
  try {
    const costs = await HospitalCost.find();
    res.json(costs);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});
router.post('/', async (req, res) => {
  const { hospitalName, procedureName, cost } = req.body;
  try {
    const newCost = new HospitalCost({ hospitalName, procedureName, cost });
    await newCost.save();
    res.json(newCost);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});
router.put('/:id', async (req, res) => {
  const { hospitalName, procedureName, cost } = req.body;
  try {
    const updatedCost = await HospitalCost.findByIdAndUpdate(
      req.params.id,
      { hospitalName, procedureName, cost },
      { new: true }
    );
    res.json(updatedCost);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});
router.delete('/:id', async (req, res) => {
  try {
    await HospitalCost.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Cost deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;