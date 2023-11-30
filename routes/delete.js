const express = require('express')
const User = require('../models/user')
const router = express.Router()

router.delete('/', deleteUser)

async function deleteUser(req, res) {
  const ids = req.query.ids.split(',')
  const deletedUsers = await User.deleteMany({ _id: { $in: ids }})
  res.json(deletedUsers)
}

module.exports = router
