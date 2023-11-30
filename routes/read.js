const express = require('express')
const User = require('../models/user')
const router = express.Router()

router.get('/', getUser)

async function getUser(req, res) {
  const { id } = req.query

  if (id) {
    const user = await User.findById(id)
    res.json(user)
  } else {
    const users = await User.find()
    res.json(users)
  }
}

module.exports = router
