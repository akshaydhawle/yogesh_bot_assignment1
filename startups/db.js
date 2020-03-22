const mongoose = require('mongoose');
module.exports =()=>{

    mongoose.connect('mongodb://localhost:27017/test',{ useUnifiedTopology: true })
            .then(()=>console.info(`successfully connected to the mongodb database.`))
            .catch((err)=>console.error(`error while connecting to the database -> ${err}`));

}