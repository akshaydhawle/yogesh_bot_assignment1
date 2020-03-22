const mongoose = require('mongoose');

const users = mongoose.model('users',new mongoose.Schema({
    gender: { type:String },
    name: {
      title: { type:String },
      first: { type:String },
      last: { type:String },
    },
    location: {
      street: {
        name:{ type:String},
        number:{type:Number}
      },
      city:{ type:String },
      state:{ type:String },
      postcode:{ type:String },
      coordinates: {
        latitude: { type:Number },
        longitude: { type:Number },
      },
      timezone: {
        offset: { type:String },
        description: { type:String },
      }
    },
    email: { type:String },
    dob: {
      date: { type:Date },
      age: { type:Number },
    },
    registered: {
      date:{ type:Date },
      age: { type:Number },
    },
    phone: { type:String },
    cell: { type:String },
    nat: {type:String }
}))


module.exports = { users };