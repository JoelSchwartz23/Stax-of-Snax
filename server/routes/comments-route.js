let router = require('express').Router()
let Comments = require('../models/comment-model')
let expressSession = require('express-session')

// GET
router.get('/', (req, res, next) => {
  Comments.find({})
    .then(comments => res.send(comments))
    .catch(next)
})

router.get("/:snackId", (req, res, next) => {
  Comments.find({ snackId: req.params.snackId })
    .then(comments => res.send(comments))
    .catch(next)
})


//post/create a new comment
router.post('/:snackId', (req, res, next) => {
  Comments.create({ snackId: req.params.snackId, creatorId: req.session.uid, description: req.body.description, username: req.session.username })
    .then(comment => res.send(comment))
    .catch(next)
})

router.post("/:commentId/subcomment", (req, res, next) => {
  Comments.findById(req.params.commentId)
    .then(comment => {
      let newSubComment = {
        creatorId: req.session.uid,
        username: req.session.username,
        description: req.body.description
      }
      comment.subcomments.push(newSubComment)
      comment.save(err => {
        if (err) {
          return next(err)
        }
        res.send("Successfully added comment")
      })
    })
    .catch(next)
})


//delete a comment
router.delete('/:commentId', (req, res, next) => {
  Comments.findOneAndDelete({ commentId: req.params.commentId, creatorId: req.session.uid })
    .then(comment => res.send({ message: "Deleted", data: comment }))
    .catch(next)
})


module.exports = router