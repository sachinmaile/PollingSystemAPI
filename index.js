const express=require('express');
require('dotenv').config();
const app=express();
const port=process.env.PORT;
const path=require('path');
const db=require('./config/mongoose');

app.use(express.urlencoded());

// use express router
app.use('/', require('./routes/index'));

app.listen(port,function(err){
    if(err){
        console.log('Error in running the server', err);
    }
    console.log('Yup! My Express server is running on port :', port);
})