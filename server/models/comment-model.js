let mongoose = require('mongoose')
let Schema = mongoose.Schema
let name = "Comment"
let ObjectId = Schema.Types.ObjectId

let comment = new Schema({
  creatorId: { type: ObjectId, ref: 'User' },
  description: { type: String },
  date: { type: Number, default: Date.now(), required: true }
})
//user schema
let schema = new Schema({
  description: { type: String, required: true },
  date: { type: Number, default: Date.now(), required: true },
  creatorId: { type: ObjectId, ref: "User", required: true },
  username: { type: String, ref: "User" },
  rating: { type: Number, required: true, default: 0 },
  subcomments: [comment],
  snackId: { type: ObjectId, ref: "snackId" }
})



let model = mongoose.model(name, schema)

module.exports = model