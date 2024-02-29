const mongoose = require("mongoose");

const consultancySchema = new mongoose.Schema({
  Firstname: {
    type: String,
    required: true,
  },
  Lastname:{
    type:String,
    required: true
  },
  Age:{
    type:Number,
    required: true
  },
  Gender:{
    type:"String",
    required: true
  },
  Phone:{
    type:Number,
    required: true
  },
  Specialty:{
    type:String,
    required: true
  }
},{timestamps:true});

const Consultancies = mongoose.model("Consultancies", consultancySchema);

module.exports= Consultancies
