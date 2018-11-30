let router = require('express').Router()
let Snacks = require('../models/snack-model')


//ratings route
router.put("/:snackId", (req, res, next) => {
  Snacks.findById(req.params.snackId)
    .then(snack => {
      let foundRating = snack.ratings.find(s => s.userId == req.session.uid)
      if (foundRating) {
        foundRating.rating = req.body.rating
      }
      else {
        snack.ratings.push(req.body)
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