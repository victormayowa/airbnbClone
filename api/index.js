const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User.js');
const bcrypt = require('bcryptjs');
const cors = require('cors');
require('dotenv').config();
const app = express();

const bcryptSalt = bcrypt.genSaltSync(10);
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}));

mongoose.connect(process.env.MONGODB_URL)
app.get('/test', (req, res) => {
    res.json('success');
});

app.post('/register', async (req, res) => {
    const {first, last, email, password} = req.body;
    const userDoc = await User.create({
        first, last, email, password: bcrypt.hashSync(password, bcryptSalt)});
    res.json(userDoc);
})

app.listen(4000);