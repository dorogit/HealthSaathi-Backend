const express = require('express');
const router = express.Router();
const Admission = require('../models/admission')

router.get("/", async (req, res) => {
  const allAdmissions = await Admission.find();
  return res.status(200).json(allAdmissions);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  await Admission.updateOne({ id }, req.body);
  const updatedAdmission = await Admission.findById(id);
  return res.status(200).json(updatedAdmission);
});

router.post("/", async (req, res) => {
  const newAdmission = new Admission({ ...req.body });
  const insertedAdmission = await newAdmission.save();
  return res.status(201).json(insertedAdmission);
});

module.exports = router;
