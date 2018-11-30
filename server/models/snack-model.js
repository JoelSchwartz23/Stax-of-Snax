let mongoose = require('mongoose')
let bcrypt = require('bcryptjs')
let Schema = mongoose.Schema
const SALT = 15
let name = "Snack"
let ObjectId = Schema.Types.ObjectId


let rating = new Schema({
  creatorId: { type: ObjectId, ref: 'User' },
  rating: { type: Number }
})

let comment = new Schema({
  creatorId: { type: ObjectId, ref: 'User' },
  description: { type: String },
  date: { type: Number, default: Date.now(), required: true }
})

//user schema
let schema = new Schema({
  name: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
  brand: { type: String, required: true },
  img: { type: String, required: true },
  description: { type: String, required: true },
  ratings: [rating],
  comments: [comment],
  creatorId: { type: ObjectId, ref: "User", required: true },

  // originality: { type: String, required: true },
  // type: {type: String, enum: ["cookie, sweet, sour, salty"], default: "general"},
})




let model = mongoose.model(name, schema)

module.exports = model
