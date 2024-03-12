const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
const doctorRouter = require("./routes/doctors")
const appointmentRouter = require("./routes/appointment")
const admissionRouter = require("./routes/admission")
const consultanciesRouter = require("./routes/consultancies")


const app = express();

app.use(express.json());
app.use(cors());

//Routers setup
app.use("/doctors", doctorRouter);
app.use("/appointments", appointmentRouter)
app.use("/admissions", admissionRouter)
app.use("/consultancies", consultanciesRouter)


//First Path
app.get("/", async (req, res) => {
  return res.json({ message: "Hello, World" });
});


const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://healthsathi27:0810200A@cluster0.tklukfx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    app.listen(3000, () => console.log("Server started on port 3000"));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
