let router = require('express').Router()
let Comments = require('../models/comment-model')

//GET
router.get('/', (req, res, next) => {
  Comments.find({})
    .then(comments => res.send(comments))
    .catch(next)
})

//get comment and its comments
router.get('/:id/comments', (req, res, next) => {
  Comments.findById(req.params.id)
    .then(comment => {
      Comments.find({ commentId: comment._id })
        .then(comments => {
          return res.send({ comment, comments })
        })
    })
    .catch(next)
})

//post/create a new comment
router.post('/', (req, res, next) => {
  Comments.create(req.body)
    .then(comment => res.send(comment))
    .catch(next)
})

//delete a comment
router.delete('/:id', (req, res, next) => {
  Comments.findOneAndDelete({ _id: req.params.id, creatorId: req.session.uid })
    .then(comment => res.send({ message: "Deleted", data: comment }))
    .catch(next)
})

//update/modify an existing comment
router.put('/:id', (req, res, next) => {
  Comments.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(comment => res.send(comment))
    .catch(next)
})


module.exports = router