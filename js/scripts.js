// Business Logic
function Order() {
  this.pizzaDetails = [];
  this.pizzaId = 0
}

Order.prototype.addPizza = function(pizza)

function Pizza(pizzaNumber, pizzaSize, pizzaCrust, pizzaSauce, pizzaCheese, pizzaToppings) {
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
    $("form#orderPizza").show();
  })
  $("form#orderPizza").submit(function() {
    const pizzaSize = $("input:radio[name=pizzaSize]:checked").val();
    const pizzaCrust = $("input:radio[name=pizzaCrust]:checked").val();
    const pizzaSauce = $("input:radio[name=pizzaSauce]:checked").val();
    const pizzaCheese = $("input:radio[name=pizzaCheese]:checked").val();
    const pizzaToppings = $("input:radio[name=pizzaToppings]:checked").val();
    let newPizza = new Pizza(pizzaDetails)
      let pizzaDetails = [pizzaSize, pizzaCrust, pizzaSauce, pizzaCheese, pizzaToppings]
      return newPizza
    console.log(newPizza);
  })

})

