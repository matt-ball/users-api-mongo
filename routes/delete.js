const express = require('express')
const User = require('../models/user')
const router = express.Router()

router.delete('/', deleteUser)

async function deleteUser(req, res) {
  const { id } = req.query
  const user = await User.findByIdAndDelete(id)
  res.json(user)
}

module.exports = router