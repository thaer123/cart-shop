/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;
function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
  console .log(cart);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {

  while(table.rows.length > 0){
    table.deleteRow(0);
  }
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
var tableBody=table.childNodes[3];
  // TODO: Iterate over the items in the cart
  for (var i=0;i<cart.items.length;i++){
  // TODO: Create a TR
  var trE1=document.createElement('tr');
  trE1.setAttribute('id',i);
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  tableBody.appendChild(trE1);
  console.log(tableBody);
  // var deleteR=document.createElement('button');
  // deleteR.setAttribute('value','x');
  // var tdEl=document.createElement('td');//
  var tdE1=document.createElement('td');
  
  tdE1.addEventListener('x',removeItemFromCart);
  var tdE2=document.createElement('td');
  var tdE3=document.createElement('td');
  tdE1.textContent='x';
  // tdE1.id=i;

  trE1.appendChild(tdE1);
  tdE2.textContent=cart.items[i].quantity;
  trE1.appendChild(tdE2);
  tdE3.textContent=cart.items[i].product;
  trE1.appendChild(tdE3);
  
  
  }
}

function removeItemFromCart(event) {
// console.log(event.path[1]);
//   cart.removeItem();
// this.remove();
// event.target.remove();
event.path[1].remove();
// cart.path[0].remove();
// var clear=cart.removeItem(event);
// console.log(CartItem.all);
// cart.removeitem();
// localStorage.removeItem(cart[0]);
// cart.saveToLocalStorage();





  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
  // cart.removeItem(event.target.id);
  // cart.saveToLocalStorage();
  // renderCart();

}

// This will initialize the page and draw the cart on screen
renderCart();
