// Business Logic
function Order() {
  this.pizzaDetails = [];
  this.pizzaId = 0
}

Order.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId();
  this.pizzaDetails.push(pizza);
}

Order.prototype.assignId = function() {
  this.pizzaId += 1;
  return this.pizzaId;
}

Order.prototype.searchPizza = function(id) {
  for (let i=0; i< this.pizzaDetails.length; i++) {
    if (this.pizzaDetails[i]) {
      if (this.pizzaDetails[i].id == id) {
        return this.pizzaDetails[i];
      }
    }
  };
  return false;
}

Order.prototype.deletePizza = function(id) {
  for (let i=0; i< this.pizzaDetails.length; i++) {
    if (this.pizzaDetails[i]) {
      if (this.pizzaDetails[i].id == id) {
        delete this.pizzaDetails[i];
        return true;
      }
    }
  }
  return false;
}

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

function displayPizzaDetails(newOrderToDisplay) {
  let pizzaList = $("ul#pizzas");
  let htmlforPizzaInfo = "";
  newOrderToDisplay.pizzaDetails.forEach(function(pizza) {
    htmlforPizzaInfo += "<li class=" + pizza.id + ">" + pizza.size + pizza.crust + pizza.toppings + "</li>";
  });
  pizzaList.html(htmlforPizzaInfo);
}

// User Interface Logic
$(document).ready(function() {
  let newOrder = new Order();
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
    // $("input:radio[name=pizzaSize]:checked").val("");
    // $("input:radio[name=pizzaCrust]:checked").val("");
    // $("input:radio[name=pizzaSauce]:checked").val("");
    // $("input:radio[name=pizzaCheese]:checked").val("");
    // $("input:radio[name=pizzaToppings]:checked").val("");
    let newPizza = new Pizza(pizzaSize, pizzaCrust, pizzaSauce, pizzaCheese, pizzaToppings);
    newOrder.addPizza(newPizza);
    displayPizzaDetails(newOrder);
  })

})

