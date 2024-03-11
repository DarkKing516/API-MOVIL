const express = require("express");
const User = require("../models/order");
const router = express.Router();

// Ruta para crear un nuevo usuario
router.post("/orders", async (req, res) => {
  try {
    const order = new User(req.body);
    await order.save();
    res.status(201).send(order);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Ruta para obtener todos los usuarios
router.get("/orders", async (req, res) => {
  try {
    const orders = await User.find();
    res.send(orders);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Ruta para obtener un usuario por su ID
router.get("/orders/:id", async (req, res) => {
  try {
    const order = await User.findById(req.params.id);
    if (!order) {
      return res.status(404).send();
    }
    res.send(order);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Ruta para actualizar un usuario por su ID
router.put("/orders/:id", async (req, res) => {
  try {
    const order = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!order) {
      return res.status(404).send();
    }
    res.send(order);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Ruta para eliminar un usuario por su ID
router.delete("/orders/:id", async (req, res) => {
  try {
    const order = await User.findByIdAndDelete(req.params.id);
    if (!order) {
      return res.status(404).send();
    }
    res.send(order);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;