let mongoose = require('mongoose')
let bcrypt = require('bcryptjs')
let Schema = mongoose.Schema
const SALT = 15
let name = "Comment"
let ObjectId = Schema.Types.ObjectId

//user schema
let schema = new Schema({
  description: { type: String, required: true },
  date: { type: Number, default: Date.now(), required: true },
  creatorId: { type: ObjectId, ref: "User", required: true },
  username: { type: String, ref: "User" },
  rating: { type: Number, required: true, default: 0 }
})



let model = mongoose.model(name, schema)

module.exports = model