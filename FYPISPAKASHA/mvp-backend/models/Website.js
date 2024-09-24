// models/Website.js
const mongoose = require('mongoose');

const WebsiteSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true }
});

module.exports = mongoose.model('Website', WebsiteSchema);
