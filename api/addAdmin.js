// server/addAdmin.js

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Admin = require('./models/admin');

dotenv.config();

const addAdmin = async (username, password) => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected');

        const existingAdmin = await Admin.findOne({ username });
        if (existingAdmin) {
            console.log('Admin with this username already exists.');
            return;
        }

        const admin = new Admin({ username, password });
        await admin.save();
        console.log('Admin user added successfully.');
    } catch (err) {
        console.error('Error adding admin user:', err);
    } finally {
        mongoose.connection.close();
    }
};

// Replace these with desired admin credentials
const username = 'admin'; // Desired username
const password = 'root123'; // Desired password

addAdmin(username, password);
