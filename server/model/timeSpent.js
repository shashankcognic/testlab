const mongoose = require('mongoose');

const timeSpentSchema = mongoose.Schema({
    // days : {
    //     type : 'String',
    //     required : [true, 'days is required']

    // },
    timespent : {
        type : 'Number',
        required : [true, 'timespent is required']
    },

    category : {
        type : mongoose.Schema.Types.ObjectId, // Must be mongodb Id
        ref : 'category',
        required : [true, "categories is required "]
    },

    subCateory : {
        type : mongoose.Schema.Types.ObjectId, // Must be mongodb Id
        ref : 'subcategory',
        required : [true, "categories is required "]
    }
})

const TimeSpent = mongoose.model('timeSpent',timeSpentSchema)

module.exports =  TimeSpent