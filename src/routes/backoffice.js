const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authentication');

// resto es una prueba
router.get('/dashboard', verifyToken, (req, res) => {
    res.json({
        success: 'guiiiii'
    });
});

module.exports = router;