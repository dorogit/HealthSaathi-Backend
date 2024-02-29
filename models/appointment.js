const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  Username: {
    type: String,
    required: true,
  },
  Userage:{
    type:Number,
    required: true
  },
  Number:{
    type:String,
    required: true
  },
  Specialty:{
    type:String,
    required: true
  },
  Doctor:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctors" // Reference to the Doctor model
  }
},{timestamps:true});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports= Appointment
