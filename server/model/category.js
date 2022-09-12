const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    categoryName : {
        type : String,
        required: [true, 'category is required'],
    },
})

const Category= mongoose.model('category',categorySchema)

module.exports = Category