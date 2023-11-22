const express = require('express')
const User = require('../models/user')
const router = express.Router()

router.post('/', createUser)

async function createUser(req, res) {
  const user = new User(req.body)
  const resp = await user.save()
  const { password, ...keep } = resp._doc
  res.json(keep)
}

module.exports = router
