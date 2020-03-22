const axios = require('axios');
const {users:userModel} = require('../models/userModel');

 
const seedData = async()=>{
    try {
    // insert data for analysis
    let arr = [];
    for(let i=0 ; i<=500 ; i++) arr.push(i);

    console.log = function() {}

   await  arr.map(async()=>{
           const {status, data:{ results:user }} = await axios.get('https://randomuser.me/api/');
                    //save user
            await userModel(user[0]).save();
   })

    return true;
        
    } catch (ex) {
        console.info(ex.message);        
    }

}

module.exports = async()=>{
   await seedData();
} 