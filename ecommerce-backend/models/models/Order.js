
const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  productId: String,
  quantity: Number,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', OrderSchema);
