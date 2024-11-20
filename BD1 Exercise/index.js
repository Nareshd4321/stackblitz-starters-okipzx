const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;
app.use(express.static('static'));


// Calculate the total price of items in the cart
app.get('/cart-total', (req, res) => {
  let newItemPrice = parseFloat(req.query.newItemPrice);
  let cartTotal = parseFloat(req.query.cartTotal);
  let result;
  if (newItemPrice < 0 || cartTotal < 0) {
    result = 'Enter proper Item price and cart total(cannot be negative)';
  } else {
    let total = newItemPrice + cartTotal;
    result = total.toString();
  }
  res.send(result);
});

// Apply a discount based on membership status

app.get('/membership-discount', (req, res) => {
  let cartTotal = parseFloat(req.query.cartTotal);
  let isMember = req.query.isMember === 'true';
  let result;
  if (cartTotal < 0) {
    result = 'Enter proper cart total (cannot be negative)';
  } else if (isMember) {
    let total =  cartTotal - (cartTotal*10)/100 ;
    result = '10% discount applied and amount after discount is ' + total.toString();
  } else {'Not a member no discount applied';}
  res.send(result);
});

// Calculate tax on the cart total
app.get('/calculate-tax', (req, res) => {
  let cartTotal = parseFloat(req.query.cartTotal);
  let result;
  if (cartTotal < 0) {
    result = 'Enter proper cart total(cannot be negative)';
  } else {
    let total = (cartTotal * 5)/100;
    result = total.toString();
  }
  res.send(result);
});

// Estimate delivery time based on shipping method
app.get('/estimate-delivery', (req, res) => {
  let shippingMethod = req.query.shippingMethod;
  let distance = parseFloat(req.query.distance);
  let result;
  if (distance < 0) {
    result = 'Enter valid distance (cannot be negative)';
  } else if (shippingMethod = 'Standard') {
    let total = (distance)/50;
    result = total.toString();
  } else if (shippingMethod = 'Express') {
    let total = distance/100;
    result = total.toString();
  }
  res.send(result);
});

// Calculate the shipping cost based on weight and distance
app.get('/shipping-cost', (req, res) => {
  let weight  = parseFloat(req.query.weight);
  let distance = parseFloat(req.query.distance);
  let result;
  if (distance < 0 || weight < 0) {
    result = 'Enter valid weight & distance (cannot be negative)';
  } else  {
    let total = weight * distance * 0.1 
    result = total.toString();
  } 
    res.send(result);
});

// Calculate loyalty points earned from a purchase
app.get('/shipping-cost', (req, res) => {
  let purchaseAmount   = parseFloat(req.query.purchaseAmount);
  let result;
  if (purchaseAmount < 0) {
    result = 'Enter valid amount (cannot be negative)';
  } else  {
    let total = purchaseAmount * 2 
    result = total.toString();
  } 
    res.send(result);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});