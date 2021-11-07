var express = require('express');
var router = express.Router();

const db = require('../../connection');

router.get('/', async (req, res) => {
  res.send("hello")
});
router.get('/category', async (req, res) => {
  const category = await db.query(`select * from Category`);
  // console.log(category)
  res.send(category.recordsets[0]);
});

module.exports = router;
