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

function Pizza(pizzaSize, pizzaCrust, pizzaSauce, pizzaCheese, pizzaToppings, pizzaCost) {
  this.size = pizzaSize;
  this.crust = pizzaCrust;
  this.sauce = pizzaSauce;
  this.cheese = pizzaCheese;
  this.toppings = pizzaToppings;
  this.cost = pizzaCost;
}

let pizzaOrder = new Pizza;

Pizza.prototype.cost = function(cost) {
  if ($("input:radio[id=smallPizza]:checked").val()) {
    cost = '"$" + 6.99'
  } else if ($("input:radio[id=mediumPizza]:checked").val()) {
    cost = '"$" + 8.99'
  } else if ($("input:radio[id=largePizza]:checked").val()) {
    cost = '"$" + 10.99'
  } else if ($("input:radio[id=xLargePizza]:checked").val()) {
    cost = '"$" + 12.99'
  }
  if (meat >= 1)
    cost.meat.forEach(function(Pizza) {
      Pizza.cost += 1.00
    });
  if (veggies >= 1)
    cost.veggies.forEach(function(Pizza) {
      Pizza.cost += .50
    })
  console.log(Pizza.cost);
} 

function displayPizzaDetails(newOrderToDisplay) {
  let pizzaList = $("ul#pizzas");
  let htmlforPizzaInfo = "";
  newOrderToDisplay.pizzaDetails.forEach(function(pizza) {
    htmlforPizzaInfo += "<li class=" + pizza.id + ">" + pizza.size + " " + pizza.crust + " pizza with " + pizza.toppings + "</li>";
  });
  pizzaList.html(htmlforPizzaInfo);
}

function orderReview(pizzaId, newOrder) {
  const pizzaReview = newOrder.searchPizza(pizzaId);
  $("#orderReview").show();
  $(".pizza-size").html(pizzaReview.size);
  $(".pizza-crust").html(pizzaReview.crust);
  $(".pizza-sauce").html(pizzaReview.sauce);
  $(".pizza-cheese").html(pizzaReview.cheese);
  $(".pizza-toppings").html(pizzaReview.toppings);
  let reviewButtons = $("#reviewButtons");
  reviewButtons.empty();
  reviewButtons.append(`<button class='removeButton ${pizza.id}'>Remove</button>`);
}

function attachEventListeners(newOrder) {
  $("us#pizzas").on("click", "li", function() {
    orderReview($(this).attr("class"), newOrder);
  });
  $("#reviewButtons").on("click", ".removeButton", function() {
    let id = $(this).attr("class");
    let cleanId = id.slice(12);
    newOrder.deletePizza(cleanId);
    $("#orderReview").hide();
    displayPizzaDetails(newOrder);
  });
}

// User Interface Logic

$(document).ready(function() {
  let newOrder = new Order();
  attachEventListeners(newOrder);
  $("#orderButton").click(function(event) {
    event.preventDefault();
    $("form#orderPizza").show();
  })
  $("form#orderPizza").submit(function(event) {
    event.preventDefault();
    
    const pizzaSize = $("input:radio[name=pizzaSize]:checked").val();
    const pizzaCrust = $("input:radio[name=pizzaCrust]:checked").val();
    const pizzaSauce = $("input:radio[name=pizzaSauce]:checked").val();
    const pizzaCheese = $("input:radio[name=pizzaCheese]:checked").val();
    const pizzaToppings = [];
    $(".pizzaToppings input:checked").each(function() {
      pizzaToppings.push($(this).val());
    })
    let newPizza = new Pizza(pizzaSize, pizzaCrust, pizzaSauce, pizzaCheese, pizzaToppings, pizzaCost);
    console.log(newPizza);
    console.log(Pizza.cost);
    newOrder.addPizza(newPizza);
    displayPizzaDetails(newOrder);
    $("#currentOrder").show();
  })
})

