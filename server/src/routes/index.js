var express = require('express');
var router = express.Router();
var dotenv = require('dotenv');
var jwt = require('jsonwebtoken');
const db = require('../../connection');
var data = require("../../product.json")
dotenv.config()
router.get('/', async (req, res) => {
  res.send(req.headers.host);
  return;
});
let rawData = data['Trà'];
let values = []
rawData.forEach(() => {
  values.push([])
})
rawData.map((item, index) => {
  values[index].push(item.title);
  values[index].push(item.thumbnail);
  values[index].push(item.description);
  values[index].push(item.price);
  values[index].push(6);
})
let insertData = async (values) => {
  let sql
  values.forEach((item) => {
    sql = `INSERT INTO quan_ly_cafe.dbo.Product (title, thumbnail, description, price, id_cat)
           VALUES (N'${item[0]}', N'${item[1]}', N'${item[2]}', N'${item[3]}', N'${item[4]}')`
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result)
    })
  })
  return null;
}
// router.get('/insert', async (req, res) => {
//   insertData(values)
//   return res.send('hello');
// });
router.get('/category', async (req, res) => {
  const category = await db.query(`select * from Category`);
  return res.send(category.recordsets[0]);
});
router.get('/product', async (req, res) => {
  const product = await db.query(`select * from Product`);
  return res.send(product.recordsets[0]);
});

module.exports = router;
