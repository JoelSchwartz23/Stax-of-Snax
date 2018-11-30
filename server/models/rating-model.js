let mongoose = require('mongoose')
let bcrypt = require('bcryptjs')
let Schema = mongoose.Schema
const SALT = 15
let name = "Rating"
let ObjectId = Schema.Types.ObjectId

//user schema
let schema = new Schema({
  SnackId: { type: ObjectId, required: true },
  rating: { type: Number, required: true },
  completed: { type: Boolean, required: true, default: false },
  userId: { type: ObjectId, ref: "User", required: true }
})



let model = mongoose.model(name, schema)

module.exports = model