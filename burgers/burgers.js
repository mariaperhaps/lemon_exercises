console.log('linked')

var burgerMenu = "Hamburger, Cheeseburger, Veggieburger"
var hamBurger = "Bison, Beef, Ostrich"
var cheeseBurger = "Cheddar, Swiss, Jack"
var veggieBurger = "Tofu, Seitan, Bean"

var selection = prompt("Please choose Burger from the following menu: " + burgerMenu)
alert("Good Choice! You chose " + selection)


if(selection === "Hamburger"){
  var meat = prompt("Choose a meat: " + hamBurger);
  alert("You've selected " + selection + " with " + meat)
} else if( selection === "Cheeseburger"){
  var cheese = prompt("Choose a cheese: " + cheeseBurger);
  alert("You've selected " + selection + " with " + cheese);
} else if( selection === "Veggieburger" ){
  var protein = prompt("Choose a protein: " + veggieBurger)
  alert("You've selected " + selection + " with " + protein);
}
