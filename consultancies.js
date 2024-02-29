const express = require('express');
const router = express.Router();
const Consultancies = require('../models/consultancies')

router.get("/", async (req, res) => {
  const allConsultancies = await Consultancies.find();
  return res.status(200).json(allConsultancies);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  await Consultancies.updateOne({ id }, req.body);
  const updatedConsultancies = await Consultancies.findById(id);
  return res.status(200).json(updatedConsultancies);
});

router.post("/", async (req, res) => {
  const newConsultancy = new Consultancies({ ...req.body });
  const insertedConsultancy = await newConsultancy.save();
  return res.status(201).json(insertedConsultancy);
});

module.exports = router;
