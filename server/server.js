const express = require('express');
const testLabRoute = require('./route/testLabRoute');

// Databsae connection File
const dbConnect = require("./config/dbConnect");

require('dotenv').config({path : "./config.env"});

const cors = require('cors');
const app = express();

//Database Connection
const dbconn = dbConnect();

// default port for server
const port =  7502;

//User  Routes
app.use("/api/testlabs",testLabRoute); 

// use middleware

app.use(cors());
app.use(express.json());


// listen to server 
app.listen(port, ()=>{
    console.log(`The server is connecting on http://localhost:${port}`);
})




