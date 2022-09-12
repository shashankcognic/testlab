const mongoose = require('mongoose');

const subCategorySchema = mongoose.Schema({
    subcategoryName : {
        type : String,
        required: [true, ' sub- category is required'],
    },
})

const SubCategory= mongoose.model('subcategory',subCategorySchema)

module.exports = SubCategory