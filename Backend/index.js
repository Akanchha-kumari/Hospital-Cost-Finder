const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./Config/db');
const cors = require('cors');
require('dotenv').config();
const app = express();
connectDB();
const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  allowedHeaders: 'Content-Type, Authorization',
};
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(express.json()); 
app.use('/api/admins', require('./Routes/adminRoutes'));
const errorHandler = require('./middleware/errorHandler');
app.use(errorHandler);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server running on port 5000'));