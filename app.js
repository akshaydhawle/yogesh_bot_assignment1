const express = require('express');

const app = express();
const cors = require('cors');

app.use(cors());

require('./startups/db')();
require('./startups/route')(app);
//seed the database with records
require('./startups/seed')();

app.get('/test',(req,res,next)=>{
    res.send({key:"working..."});
})

let port = process.env.PORT || 5000;
app.listen(port ,()=>{
    console.log(`server running on port ${port}`);
})

