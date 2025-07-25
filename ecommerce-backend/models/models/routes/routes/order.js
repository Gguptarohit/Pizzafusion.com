
const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

router.post('/', async (req, res) => {
  const { userId, productId, quantity } = req.body;
  const order = new Order({ userId, productId, quantity });
  await order.save();
  res.json({ message: 'Order placed successfully!' });
});

router.get('/:userId', async (req, res) => {
  const orders = await Order.find({ userId: req.params.userId });
  res.json(orders);
});

module.exports = router;
