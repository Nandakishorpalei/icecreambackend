const express = require('express');
const router = express.Router();

const User = require('../model/userModel');

router.post('', async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.status(201).send(user);
  } catch (e) {
    console.log(e.message);
    return res.status(500).send(e.message);
  }
});

router.get('', async (req, res) => {
  try {
    const user = await User.find().lean().exec();
    return res.status(200).send(user);
  } catch (e) {
    console.log(e.message);
    return res.status(500).send(e.message);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).lean().exec();
    return res.status(200).send(user);
  } catch (e) {
    console.log(e.message);
    return res.status(500).send(e.message);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    return res.status(200).send(user);
  } catch (e) {
    console.log(e.message);
    return res.status(500).send(e.message);
  }
});

module.exports = router;
