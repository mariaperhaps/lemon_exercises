var burgerMenu = "Hamburger, Cheeseburger, Veggieburger"
var hamBurger = "Bison, Beef, Ostrich"
var cheeseBurger = "Cheddar, Swiss, Jack"
var veggieBurger = "Tofu, Seitan, Bean"

var selection = prompt("Please choose Burger from the following menu: " + burgerMenu)
console.log("Good Choice! You chose " + selection)

if(selection === "Hamburger"){
  console.log(hamBurger);
} else if( selection === "Cheeseburger"){
  console.log(cheeseBurger);
} else if( selection === "Veggieburger" ){
  console.log(veggieBurger);
}
