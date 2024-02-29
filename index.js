const express = require("express");
const mongoose = require("mongoose");
const doctorRouter = require("./routes/doctors")
const appointmentRouter = require("./routes/appointment")
const admissionRouter = require("./routes/admission")
const consultanciesRouter = require("./routes/consultancies")


const app = express();

app.use(express.json());

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
      "connection string :)");
    app.listen(3000, () => console.log("Server started on port 3000"));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();