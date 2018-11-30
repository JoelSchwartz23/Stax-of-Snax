let mongoose = require('mongoose')
let bcrypt = require('bcryptjs')
let Schema = mongoose.Schema
const SALT = 15
let name = "Snack"
let ObjectId = Schema.Types.ObjectId

//user schema
let schema = new Schema({
  name: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
  brand: { type: String, required: true },
  img: { type: String, required: true },
  description: { type: String, required: true },
  creatorId: { type: ObjectId, ref: "User", required: true }
  // originality: { type: String, required: true },
  // type: {type: String, enum: ["cookie, sweet, sour, salty"], default: "general"},
})



let model = mongoose.model(name, schema)

module.exports = model