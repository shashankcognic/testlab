const mongoose = require('mongoose');

// const hourSchema = new mongoose.Schema({
//     hour : {
//         type : Number,
//     }
// })


const dateSchema = new mongoose.Schema({
    date: {type : Date,
        required : true
    },
    hour: {type : Number},

    // date: {type : Date,
    //     required : true
    // },
    // hour: {type : Number},

    // date: {type : Date,
    //     required : true
    // },
    // hour: {type : Number},

    // date: {type : Date,
    //     required : true
    // },
    // hour: {type : Number},

    // date: {type : Date,
    //     required : true
    // },
    // hour: {type : Number},

    // date: {type : Date,
    //     required : true
    // },
    // hour: {type : Number},

    // date: {type : Date,
    //     required : true
    // },
    // hour: {type : Number},
})

const testlabSchema = mongoose.Schema({

    developers : {
        type : String,
        required : [true, 'developer is required']
    },

    languages : {
        type : String,
        required : [true, "language is required "]
    },

    day : [dateSchema]
        
})

const TestLab = mongoose.model('testlab',testlabSchema)

module.exports =  TestLab;