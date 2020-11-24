const { JSDOM } = require('jsdom');
const mongoose = require('mongoose'),
slugify = require('slugify'),
domPurify = require('dompurify'),
dompurify = DomPurify(new JSDOM().window);

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    published: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        required: true,
        enum: ['Draft', 'Live'],
        default: 'Live'
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    sanitizedHtml: {
        type: String,
        required: true
    },
});


//Validointi

blogSchema.pre('validate', function(next) {
    if (this.title) {
        this.slug = slugify(this.title, { lower: true, strict: true})
    }
    if (this.body) {
        this.sanitizedHtml = dompurify.sanitize(marked(this.body))
    }
    next()
});

module.exports = mongoose.model('BlogModel', blogSchema, "MainCollection");