console.log('linked')

var burgerMenu = "Hamburger, Cheeseburger, Veggieburger"
var hamBurger = "Bison, Beef, Ostrich"
var cheeseBurger = "Cheddar, Swiss, Jack"
var veggieBurger = "Tofu, Seitan, Bean"

// var selection = prompt("Please choose Burger from the following menu: " + burgerMenu)
// alert("Good Choice! You chose " + selection)


// if(selection === "Hamburger"){
//   var meat = prompt("Choose a meat: " + hamBurger);
//   alert("You've selected " + selection + " with " + meat)
// } else if( selection === "Cheeseburger"){
//   var cheese = prompt("Choose a cheese: " + cheeseBurger);
//   alert("You've selected " + selection + " with " + cheese);
// } else if( selection === "Veggieburger" ){
//   var protein = prompt("Choose a protein: " + veggieBurger)
//   alert("You've selected " + selection + " with " + protein);
// }


var burger = prompt("Choose a burger to search " + burgerMenu);

if(burger === "Hamburger"){
  var meat = prompt("Which meat do you crave? Choose from: " + hamBurger)
  if(hamBurger.search(meat) != -1){
    alert("You're In luck!")
  }else{
    alert("Not Available for this burger");
  }
} else if(burger === "Cheeseburger"){
  var cheese = prompt("What kind of cheese do you crave? Choose from: " + cheeseBurger)
  if(cheeseBurger.search(cheese) != -1){
    alert("You're In luck!")
  }else{
    alert("Not Available for this burger");
  }
}else if(burger === "Veggieburger"){
  var protein = prompt("What kind of protein do you crave? Choose from: " + veggieBurger)
  if(veggieBurger.search(protein) != -1){
    alert("You're In luck!")
  }else{
    alert("Not Available for this burger");
  }
}
