const express = require('express');
const router = express.Router();
const Admin = require('./models/admin');

// Admin login route
router.post('/admin/login', async (req, res) => {
    const { username, password } = req.body;
    const admins = await Admin.findOne({ username, password });
    if (admins) {
        res.status(200).json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

// Add/update beacon or location route
router.post('/admin/beacon', async (req, res) => {
    // Logic to add/update beacon location
    res.status(200).json({ message: 'Beacon location updated' });
});

// Add new location
router.post('/admin/location', async (req, res) => {
    // Logic to add new location
    res.status(200).json({ message: 'Location saved' });
});

module.exports = router;
