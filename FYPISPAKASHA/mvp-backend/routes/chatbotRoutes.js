// routes/chatbotRoutes.js
const express = require('express');
const { generateWebsite } = require('../controllers/chatbotController');
const { authenticateJWT } = require('../middleware/authenticateToken');
const router = express.Router();

router.post('/generate', authenticateJWT(), generateWebsite);

module.exports = router;
