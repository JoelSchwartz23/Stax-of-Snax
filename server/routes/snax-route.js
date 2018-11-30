let router = require('express').Router()
let Snacks = require('../models/snack-model')
let Comments = require('../models/comment-model')

//GET
router.get('/', (req, res, next) => {
  Snacks.find({})
    .then(snacks => res.send(snacks))
    .catch(next)
})

//get snack by id
router.get('/:id', (req, res, next) => {
  Snacks.findById(req.params.id)
    .then(snack => res.send(snack))
    .catch(next)
})

//get snack and its comments
router.get('/:id/comments', (req, res, next) => {
  Snacks.findById(req.params.id)
    .then(snack => {
      Comments.find({ snackId: snack._id })
        .then(comments => {
          return res.send({ snack, comments })
        })
    })
    .catch(next)
})

//post/create a new snack
router.post('/', (req, res, next) => {
  Snacks.create(req.body)
    .then(snack => res.send(snack))
    .catch(next)
})

//delete a snack
router.delete('/:id', (req, res, next) => {
  Snacks.findOneAndUpdate({ _id: req.params.id, creatorId: req.session.uid }, { description: 'No longer Available', price: 0, img: 'http://placehold.it/200x200', brand: 'A brand', name: 'Enter a name' })
    .then(snack => res.send({ message: "Deleted", data: snack }))
    .catch(next)
})

//update/modify an existing snack
router.put('/:id', (req, res, next) => {
  Snacks.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(snack => res.send(snack))
    .catch(next)
})

module.exports = router