const expressAsyncHandler = require('express-async-handler');
const TestLab = require ('../model/testLab');

// Create Transaction

const createTestLabCtrl = expressAsyncHandler(async (req,res)=>{
    console.log(req.body)
    const{ dev,lan,hours } = req?.body;


    try {
        const test = await TestLab.create({dev,lan,hours})
        // res.status(200).json(user)
        return res.json({
            message:" successfully",
            status:true,
        })

    } catch (error) {
        res.json(error)
    }
});


module.exports = {createTestLabCtrl}; 
