const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./Config/db');
const hospitalCosts = require('./Routes/HospitalCost');
require('dotenv').config();

const app = express();
connectDB();
app.use(bodyParser.json());
app.use('/api/costs', hospitalCosts);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server running on port 5000'));