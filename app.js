const express= require('express');
const mongoose= require('mongoose');
require('dotenv/config')
const app= express();

app.get('/',(req, res) => {
res.send("we at home");

});

app.get('/post',(req, res) => {
    res.send("we at post");
});

mongoose.connect(
    //
    r0-obpbp.mongodb.net/test?retryWrites=true&w=majority'
    process.env.DB_CONNECTION  , 
 { useNewUrlParser: true }, 
 ()=>console.log('connected to db') );


app.listen(5555);
