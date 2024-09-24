// routes/websiteRoutes.js
const express = require('express');
const { downloadWebsite } = require('../controllers/websiteController');
const router = express.Router();

router.get('/download/:id', downloadWebsite);

// Route to get user's generated designs


module.exports = router;
