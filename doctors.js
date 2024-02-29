const express = require('express');
const router = express.Router();
const Doctor = require('../models/doctor')

router.get("/", async (req, res) => {
  const allDoctors = await Doctor.find();
  return res.status(200).json(allDoctors);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  await Doctor.updateOne({ id }, req.body);
  const updatedDoctor = await Doctor.findById(id);
  return res.status(200).json(updatedDoctor);
});

router.post("/", async (req, res) => {
  const newDoctor = new Doctor({ ...req.body });
  const insertedDoctor = await newDoctor.save();
  return res.status(201).json(insertedDoctor);
});

module.exports = router;
