const router = require("express").Router();

let Glass = require("../models/glass.model");

router.route("/").post((req, res) => {
  const id = req.body.data.id;
  Glass.findOne({ id: id })
    .then((glass) => res.json(glass))
    .catch((err) => res.status(400).json("Erroro " + err));
});
router.route("/").get((req, res) => {
  Glass.find()
    .then((glass) => res.json(glass))
    .catch((err) => res.status(400).json("Erroro " + err));
});
router.route("/addreview").post((req, res) => {
  const id = req.body.data.id;
  const newreview = req.body.data.review;
  console.log(id, newreview);
  Glass.findOne({ id: id }, function (err, glass) {
    if (err) {
      console.log(err);
    } else {
      if (!glass) {
        res.status(404).send();
      } else {
        if (req.body.data.review) {
          glass.reviews.total = glass.reviews.total + 1;
          glass.reviews.comments.push(newreview);
        }
        glass.save(function (err, updatedReviews) {
          if (err) {
            console.log(err);
            res.status(500).send();
          } else {
            console.log(updatedReviews);
          }
        });
      }
    }
  });
});
module.exports = router;
