// Business Logic

function Pizza (pizzaNumber, pizzaSize, pizzaCrust, pizzaSauce, pizzaCheese, pizzaToppings) {
  this.count = pizzaNumber;
  this.size = pizzaSize;
  this.crust = pizzaCrust;
  this.sauce = pizzaSauce;
  this.cheese = pizzaCheese;
  this.toppings = pizzaToppings;
}

let pizzaSize = ["small", "medium", "large", "extra large"]

let pizzaSauce = ["no sauce", "light sauce", "normal sauce", "extra sauce"]

let pizzaCheese = ["no cheese", "light cheese", "normal cheese", "extra cheese"]

let pizzaCrust = ["thin crust", "hand tossed", "thick crust", "gluten-free"]

let pizzaToppings = ["cheese", "pepperoni", "sausage", "beef", "ham", "chicken", "bacon", "anchovies", "mushrooms", "olives", "roasted red peppers", "onions", "spinach", "tomatoes", "banana peppers"]

let pizzaOrder = new Pizza;

Pizza.prototype.Cost = function() {

}

// User Interface Logic
$(document).ready(function() {
  let newPizza = new Pizza();
  $("#orderButton").click(function(event) {
    event.preventDefault;
    console.log("order button works");
    $("form#orderPizza").show();
  })
})

