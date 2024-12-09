const express = require('express');
const route = express.Router();
const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');

route.get('/', (req, res) => {
    res.render('signup')
});

route.post('/signup', async (req, res) => {
    const { username, email, password } = req.body
    if (!(username && email && password)) {
       return res.status(400).json('All Fields Are Mantatory!')
    }

    const userAvailable = await userModel.findOne({ email });
    if (userAvailable) {
        res.status(400).json('User already exist!')
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    console.log('Hashed Password: ', hashedPassword)

    let newUserData =({
        username,
        email,
        password: hashedPassword
    });
    const newUser = await userModel.create(newUserData)
    if (newUser) {
        // res.status(200).json({ _id: newUserData.id, email: newUserData.email })
        res.status(200).render('login')
    } else {
        res.status(500).json('err')
    }

})

module.exports = route;