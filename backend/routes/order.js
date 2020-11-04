const router = require("express").Router();
let Order = require("../models/order.model");

router.route("/").post((req, res) => {
  console.log(req.body.data);
  const order = new Order(req.body);
  console.log(order);
  order.save((err) => {
    if (err) {
      console.log(err);
    } else {
      res.json(order);
    }
  });
});
module.exports = router;
