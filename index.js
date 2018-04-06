/*
var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var item = generateCartItem(item)
  getCart().push(item)
  return `${item.itemName} has been added to your cart.`
}

function viewCart() {
  return getCart().length === 0 ? "Your shopping cart is empty." : generateCartDescription()
}

function total() {
  var sum = sumUpPrices()
  return sum
}

function removeFromCart(itemName) {
  var itemToRemove = searchCartForItemToRemove(itemName)
  return itemToRemove ? removeItemFromCart(itemToRemove) : notifyUserThereIsNoItemToRemove()
}

function placeOrder(cardNumber) {
  if (arguments[0] == undefined) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var sumToCharge = total()
    setCart([])
    return `Your total cost is $${sumToCharge}, which will be charged to the card ${cardNumber}.`
  }
}

// helper functions
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateCartItem(itemName) {
  return {
    itemName:itemName,
    itemPrice:getRandomInt(1, 100)
  }
}

function generateCartDescription() {
  var cartDescription = 'In your cart, you have '
  if ( getCart().length >= 1 ) {
    cartDescription += `${getCart()[0].itemName} at $${getCart()[0].itemPrice}`
  }
  if ( getCart().length >= 2 ) {
    var middleCartItemsDescription = ''
    for (var i=1; i<getCart().length -1; i++) {
      middleCartItemsDescription += `, ${getCart()[i].itemName} at $${getCart()[i].itemPrice}`
    }
    cartDescription += `${middleCartItemsDescription}, and ${getCart()[getCart().length-1].itemName} at $${getCart()[getCart().length-1].itemPrice}`
  }

  return `${cartDescription}.`
}

function searchCartForItemToRemove(itemName) {
  var searchResult
  for (var i=0; i<getCart().length; i++) {
    if (getCart()[i].itemName === itemName) {searchResult = getCart()[i]}
  }
  return searchResult
}

function sumUpPrices() {
  var sum = 0
  for (var i=0; i<getCart().length; i++) {
    sum = sum + getCart()[i].itemPrice
  }
  return sum
}

function notifyUserThereIsNoItemToRemove() {
  return 'That item is not in your cart.'
}

function removeItemFromCart(itemToRemove) {
  var indexOfItemToRemove = cart.indexOf(itemToRemove)
  //Array.prototype.splice()
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
  getCart().splice(indexOfItemToRemove,1)
} */


var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor((Math.random() * 100) + 1)
  cart.push({ itemName: item, itemPrice: price })
  return `${item} has been added to your cart.`
}

function viewCart() {
  var newCart = []
  if (cart.length === 0) {
    return `Your shopping cart is empty.`
  } else {
    if (cart.length === 1) {
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
    } else {
    for(var i = 0; i < cart.length; i++) {
      newCart.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
      }
    }
  }
  var body = newCart
  var last = newCart[newCart.length - 1]
  body.pop()
  return `In your cart, you have ${body.join(", ")}, and ${last}.`
}

function total() {
  var bodyTotal = 0
  for(var i = 0; i < cart.length; i++) {
    bodyTotal += cart[i].itemPrice
  }
    return bodyTotal
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
      if (cart[i].itemName === item) {
    cart.splice(i, 1)
     return cart
     } 
  }
return `That item is not in your cart.`
}

function placeOrder(cardNumber) {
  if (cardNumber > 0) {
    var newTotal = total()
    cart.length = 0
      return `Your total cost is $${newTotal}, which will be charged to the card ${cardNumber}.`
  } else {
    return `Sorry, we don't have a credit card on file for you.`
  }
}
