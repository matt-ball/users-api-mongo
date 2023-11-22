const express = require('express')
const User = require('../models/user')
const router = express.Router()

router.get('/', getUser)

async function getUser(req, res) {
  const { id } = req.query
  const user = await User.findById(id)
  res.json(user)
}

module.exports = router
