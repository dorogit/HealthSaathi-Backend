const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Specialty:{
    type:String,
    required: true
  },
  District:{
    type:String,
    required: true
  },
  Location:{
    type:String,
    required: true
  }
},{timestamps:true});

const Doctor = mongoose.model("Doctors", doctorSchema);

module.exports= Doctor