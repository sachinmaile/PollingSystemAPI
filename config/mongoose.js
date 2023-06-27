const mongoose=require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.MONGO_DB_URL);
const db=mongoose.connection;
db.on('error',console.error.bind(console,'error connecting to db'));
db.once('open',function(){
    console.log('Successfully connected to the database');
});

module.exports=db;