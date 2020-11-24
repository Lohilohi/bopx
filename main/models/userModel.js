const { JSDOM } = require('jsdom');
const mongoose = require('mongoose'),
marked = require('marked'),
slugify = require('slugify'),
DomPurify = require('dompurify'),
dompurify = DomPurify(new JSDOM().window);


const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    date_time: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.Model('userSchema', userSchema, "UserCollection");