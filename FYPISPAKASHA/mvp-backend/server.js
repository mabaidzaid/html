const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8002;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.get('/', (req, res) => {
  res.send('API is running');
});

// Importing and using routes
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

const chatbotRoutes = require('./routes/chatbotRoutes');
app.use('/api/chatbot', chatbotRoutes);

const websiteRoutes = require('./routes/websiteRoutes');
app.use('/api/websites', websiteRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
