var express = require('express');
var router = express.Router();
var dotenv = require('dotenv');
var jwt = require('jsonwebtoken');
const db = require('../../connection');
dotenv.config()
router.post('/login', (req, res) => {
  const username = req.body.username
  const user = { name: username }
  const accessToken = generateAccessToken(user)
  res.json({ accessToken: accessToken })
})

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1500s' })
}
module.exports = router