let router = require('express').Router()
let Snacks = require('../models/snack-model')


//ratings route
router.put("/:snackId", (req, res, next) => {
  Snacks.findById(req.params.snackId)
    .then(snack => {
      let foundRating = snack.ratings.find(r => r.creatorId.toString() == req.session.uid.toString())
      if (foundRating) {
        foundRating.rating = req.body.rating
      }
      else {
        let newRating = {
          creatorId: req.session.uid,
          rating: req.body.rating
        }
        snack.ratings.push(newRating)
      }
      snack.save(err => {
        if (err) {
          return next(err)
        }
        res.send("Successfully added rating")
      })
    })
})

module.exports = router