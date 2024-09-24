const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes');
const dotenv = require('dotenv');
const serverless = require('serverless-http');

// Load environment variables
dotenv.config();

const app = express();

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Middleware
app.use(bodyParser.json());
app.use('/api', routes);

module.exports.handler = serverless(app);
