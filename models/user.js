const bcrypt = require('bcrypt')
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true, select: false }
})

userSchema.pre('save', function(next) {
  bcrypt.hash(this.password, 10, (err, hash) => {
    this.password = hash
    next()
  })
})

module.exports = mongoose.model('User', userSchema)
