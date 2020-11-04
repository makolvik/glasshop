const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const cartItem = new Schema({
  id: Number,
  total: Number,
  quant: Number,
  price: Number,
  title: String,
});
const orderModel = new Schema({
  client: { Firstname: String, Lastname: String, Phone: Number },
  order: { cart: [cartItem], total: Number },
});
const Order = mongoose.model("Order", orderModel, "Order");
module.exports = Order;
