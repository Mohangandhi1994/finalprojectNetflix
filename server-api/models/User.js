const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        trim: true,
    },
    last_name: {
        type: String,
        trim: true,
        default: null
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: 'Email address is required',
        trim: true
    },
    password: {
        type: String,
        required: 'Password is required',
        trim: true
    },
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})

module.exports = mongoose.model('User', userSchema)