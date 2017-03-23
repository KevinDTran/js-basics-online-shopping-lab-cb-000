var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart(){
  return cart;
}

function addToCart(item){ //the 'item' argument is a string
  var price = Math.floor(Math.random()*100); //this generates a random price that we can attach to the item
  cart.push({[item]:price}) // <--- this is supposed to add an object with the item and price to the 'cart' array
  var new_line = (item + " has been added to your cart.")
  console.log (new_line)
  return cart
}

function viewCart(){
  if (cart.length>0){
    var array = []
  for (var i=0; i<cart.length; i++){
    for (var item in cart[i]){
    array.push(item + " at $" + cart[i][item])
    }
  }
  console.log("In your cart, you have " + array.join(", ") + ".");
  }
  else{
    console.log("Your shopping cart is empty.")
  }
}


function removeFromCart(item){
  for(var i in cart){
    if (cart[i].hasOwnProperty(item) == true){
      cart.splice(i, 1)
    }
  }
  console.log ("That item is not in your cart.")
}

function placeOrder(cardnumber){
  var current_total = total()
  if (cardnumber != undefined){
    cart = [];
    console.log("Your total cost is $" + current_total + ", which will be charged to the card " + cardnumber + ".");
  }
  else{
    console.log("We don't have a credit card on file for you to place your order.");
  }
}
