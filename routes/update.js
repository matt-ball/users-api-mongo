const express = require('express')
const User = require('../models/user')
const router = express.Router()

router.patch('/', updateUser)

async function updateUser(req, res) {
  const { id } = req.query
  const user = await User.findByIdAndUpdate(id, req.body, { new: true })
  res.json(user)
}

module.exports = router
