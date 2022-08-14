const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
require('dotenv').config()

const userModel = require('./models/User')

const Router = express.Router()


Router.post('/register', async (req, res) => {
    console.log(req.body);
    const email = req.body.email;
    const fName = req.body.first_name;
    const lName = req.body.last_name;
    const password = req.body.password;

    if ((email && email !== "") && (password && password !== "" && password.length >= 6)) {
        const hash = bcrypt.hashSync(password, 10)

        try {
            const User = new userModel({
                email: email,
                first_name: fName,
                last_name: lName ? lName : null,
                password: hash,
            })

            const user = await User.save()
            return res.status(200).json({
                message: 'success_create',
                data: user
            })

        } catch (error) {

            return res.status(500)
                .json({
                    message: error.message,
                    code: 500
                })
        }
    } else {
        return res.status(500).json({ "msg": "Email and password are required, and password should be at least 6 caracters !" })
    }
})