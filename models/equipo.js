const mongoose = require('mongoose')

const Schema = mongoose.Schema

const PostSchema = new Schema({
  image:String,
  name:String
})

const EQUIPOS = mongoose.model('Post', EquSchema)

module.exports = EQUIPOS;
