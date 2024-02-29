const express = require('express');
const router = express.Router();
const Appointment = require('../models/appointment')

router.get("/", async (req, res) => {
  const allAppointments = await Appointment.find();
  return res.status(200).json(allAppointments);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  await Appointment.updateOne({ id }, req.body);
  const updatedAppointment = await Appointment.findById(id);
  return res.status(200).json(updatedAppointment);
});

router.post("/", async (req, res) => {
  const newAppointment = new Appointment({ ...req.body });
  const insertedAppointment = await newAppointment.save();
  return res.status(201).json(insertedAppointment);
});

module.exports = router;
