const express = require('express')
const User = require('../models/user')
const router = express.Router()

router.post('/', createUser)

async function createUser(req, res) {
  let body = req.body
  const singleUser = !Array.isArray(body)

  if (singleUser) {
    body = [body]
  }

  const users = body.map(user => new User(user))
  const response = await User.create(users)
  
  if (singleUser) {
    const { password, ...body } = response[0]._doc;
    res.json(body)
  } else {
    const body = response.map(doc => {
      const { password, ...keep } = doc._doc
      return keep
    })
    res.json(body)
  }
}

module.exports = router
