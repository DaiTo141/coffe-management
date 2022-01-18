var express = require('express');
var router = express.Router();
var dotenv = require('dotenv');
var jwt = require('jsonwebtoken');
const db = require('../../connection');
dotenv.config()
router.get("/order-detail", async (req, res) => {
  let orderId = req.query.orderId
  let order_detail = await db.query(`select * from OrderDetail od WHERE od.order_id = ${orderId}`)
  // console.log(order_detail)
  let response = {
    products: []
  }
  order_detail = order_detail.recordsets[0]
  for (let j = 0; j < order_detail.length; j++) {
    let productDetail = await db.query(`select * from Product p WHERE p.id = ${order_detail[j].product_id}`)
    productDetail = productDetail.recordsets[0]
    response.products.push({
      id: order_detail[j].id,
      quantity: order_detail[j].number,
      name: productDetail[0].title,
      price: productDetail[0].price
    })
  }
  return res.send({
    response: response
  })
})
router.get("/orders", async (req, res) => {
  const orders = await db.query(`select * from Orders o, Customer c WHERE o.customer_id  = c.id `);
  return res.send(orders.recordsets[0])
})
module.exports = router