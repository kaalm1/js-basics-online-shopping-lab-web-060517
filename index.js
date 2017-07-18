var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var price = Math.floor(Math.random()*(100-1)+1)
 var o = new Object()
 o[item] = price
 cart.push(o)
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  // write your code here
  var key = ""

  if (cart.length === 0){
    var str = "Your shopping cart is empty."
    console.log(str)
    return str
  }

  var str = "In your cart, you have"
  for (var i = 0; i < cart.length-1; i++) {
    key = Object.keys(cart[i])
    str += ` ${key[0]} at \$${cart[i][key[0]]},`
  }

  key = Object.keys(cart.slice(-1)[0])
  if (cart.length > 1){
    if (cart.length === 2) {str = str.slice(0,-1)}
    str += ` and ${key[0]} at \$${cart.slice(-1)[0][key[0]]}`
  } else {
    str += ` ${key[0]} at \$${cart[i][key[0]]}`
  }

  str += "."
  console.log( str)
  return str
 }

function total() {
  // write your code here
  var key = ""
  var values = cart.map(function(obj){
    key = Object.keys(obj)[0]
    return obj[key]})
  var sum = values.reduce(function(a,b){return a+b},0)
  return sum
}

function removeFromCart(item) {
  // write your code here
  for (var i = 0; i < cart.length; i++) {
    if (Object.keys(cart[i])[0] === item){
      cart.splice(i,1);
      break;
    }
  }
  if (i === cart.length) {console.log("That item is not in your cart.")}
}

function placeOrder(cardNumber) {
  // write your code here
  var cartTotal = 0
  debugger
  if(cardNumber === undefined){console.log("Sorry, we don\'t have a credit card on file for you."); return;}
  cartTotal = total()
  console.log(`Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`)
  cart = []
}
