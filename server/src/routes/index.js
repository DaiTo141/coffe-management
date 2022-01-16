var express = require('express');
var router = express.Router();
var dotenv = require('dotenv');
var moment = require('moment')
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
  console.log("run run run")
  const product = await db.query(`select * from Product`);
  return res.send(product.recordsets[0]);
});

router.post('/login', (req, res) => {
  const username = req.body.username;

  console.log("username", username)
  const user = { name: username }
  const accessToken = generateAccessToken(user)
  return res.json({ accessToken: accessToken })
})

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1500s' })
}

router.post('/customer', async (req, res) => {
  let idCustomer
  let data = req.body.customer
  let cartData = req.body.cart
  let totalPrice = 0
  cartData.forEach((item) => {
    totalPrice += item.price * item.quantity
  })
  let date = new Date()
  date = moment().format("YYYY-MM-DD HH:mm:ss")
  console.log(`date`, date)
  // console.log(`totalPrice`, totalPrice)

  // console.log(cartData)

  const sqlInsertCustomer = `
  INSERT INTO quan_ly_cafe.dbo.Customer
  (fullname, address, email, phone_number)
  VALUES(N'${data.name}', N'${data.street}', N'${data.email}', N'${data.phone}');
  `
  const sqlCheckCustomer = `
  SELECT * FROM Customer
  WHERE email = '${data.email}'
  `

  let customerData = await db.query(sqlCheckCustomer)
  if (customerData.rowsAffected[0] > 0) {
    idCustomer = customerData.recordset[0].id
    console.log("id", idCustomer)
  } else {
    await db.query(sqlInsertCustomer);
    customerData = await db.query(sqlCheckCustomer)
    idCustomer = customerData.recordset[0].id
    console.log("id", idCustomer)
  }
  const sqlInsertOrders = `
  INSERT INTO quan_ly_cafe.dbo.Orders
  (staff_id, customer_id, total_price, order_date, note)
  VALUES(3, ${idCustomer}, ${totalPrice}, '${date}', N'${data.notes}');
  `
  await db.query(sqlInsertOrders)
  let newOrder = await db.query(`select Max(id) from Orders`)
  let idOrder = newOrder.recordset[0]['']
  // INSERT INTO quan_ly_cafe.dbo.OrderDetail
  // (product_id, [number], price, total_price, order_id)
  // VALUES(0, 0, 0, 0, 0);
  cartData.forEach(async (item) => {
    let sqlInsertOrderDetail =
      `
    INSERT INTO quan_ly_cafe.dbo.OrderDetail
    (product_id, [number], price, total_price, order_id)
    VALUES(${item.id}, ${item.quantity}, ${item.price}, ${item.price * item.quantity}, ${idOrder});
    `
    await db.query(sqlInsertOrderDetail)
  })
  // console.log(customerData)
  return res.send("hello")
})

module.exports = router;
