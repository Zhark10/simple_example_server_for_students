import mongoose from 'mongoose'

const User = mongoose.Schema({
  firstname: {type: String, required: true},
  secondname: {type: String, required: true},
  age: {type: String, required: true},
})

export default mongoose.model('User', User)