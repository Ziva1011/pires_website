
const express = require("express")
require('dotenv').config({path: "../.env"});
//Enable CORS - mechanism that allows restricted resources to be requested from another domain 
const cors = require("cors")

const mongoose = require('mongoose');
const port = process.env.PORT || 5000;


const app = express()

app.use(cors())
//parses json
app.use(express.json())


mongoose.connect(process.env.PIRES_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected...')).catch(err => console.log(err));

/*
ROUTERS
const userRouter = require ('./routes/auth');
app.use('/users', userRouter);              

const reviewRoute = require ('./routes/review')
app.use('/reviews', reviewRoute);
*/

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
});

module.exports =  app
