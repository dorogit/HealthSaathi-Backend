const mongoose = require("mongoose");

const admissionSchema = new mongoose.Schema({
  Firstname: {
    type: String,
    required: true,
  },
  Lastname:{
    type:String,
    required: true
  },
  Grievance:{
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

const Admission = mongoose.model("Admissions", admissionSchema);

module.exports= Admission
