// Business Logic

function Pizza () {
  this.size = pizzaSize;
  this.crust = pizzaCrust;
  // this.sauce = [];
  // this.cheese = pizzaCheese;
  this.toppings = pizzaToppings;
}

function pizzaSize() {
  this.small = $10;
  this.medium = $12;
  this.large = $14;
  this.xLarge = $18;
}

let pizzaCrust = ["thin crust", "hand tossed", "thick crust", "gluten-free"]

let pizzaToppings = ["cheese", "pepperoni", "sausage", "beef", "ham", "chicken", "bacon", "anchovies", "mushrooms", "olives", "roasted red peppers", "onions", "spinach", "tomatoes", "pineapple"]

let pizzaOrder = new Pizza;

Pizza.prototype.Cost = function() {

}

// User Interface Logic
$(document).ready(function() {
  $("#orderButton").click(function(event) {
    event.preventDefault;
    console.log("order button works");
  })
})

