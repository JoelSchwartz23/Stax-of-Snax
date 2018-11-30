let router = require('express').Router()
let Snacks = require('../models/snack-model')


//coments route
router.put("/:snackId", (req, res, next) => {
  Snacks.findById(req.params.snackId)
    .then(snack => {
      // let foundComment = snack.comments.find(s => s.userId == req.session.uid)
      // if (foundComment) {
      //   foundComment.comment = req.body.comment
      // }
      // else {
      snack.comments.push(req.body)
      // }
      snack.save(err => {
        if (err) {
          return next(err)
        }
        res.send("Successfully added comment")
      })
    })
})

module.exports = router