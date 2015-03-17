//mkdir in your Classwork folder called burgers, inside of it touch two files, one called index.html and one called burgers.js. Set up the index the way that Crawford instucted.

//Include a script tag that links to the burger.js file.

//now open up the burger.js file in sublime. Let's do a quick sanity check by console logging the string 'linked'

//From Sublime in the index.html file ctrl-click inside the file. A menu will pop up and you should have the option to "Open in Browser." Select that one. The file should open up in the browser. It will look like a blank white page. This is good.

//While in Chrome, hit option-command-j. The console should pop up. Here are your Chrome Developer Tools! Let's click on the tab that says 'Console.' In here we can write Javascript, we can try things out, play around and get some really useful messages. Anything we console.log will show up here. If you js file was linked correctly in the html, you should see the word 'linked'. Does everyone see this? Now we're set up to go.
//Just for go to our awesome MDN docs:
//https://developer.mozilla.org/en-US/docs/Web/JavaScript
//open up the console. cool ascii art. Fun messages :)



//Now, back in our burger.js, Let's define a few variable and assign them to strings.

var burgerMenu = "Hamburger, Cheeseburger, Veggieburger"
var hamBurger = "Bison, Beef, Ostrich"
var cheeseBurger = "Cheddar, Swiss, Jack"
var veggieBurger = "Tofu, Seitan, Bean"

//Now we want to leave this food choice open-ended. We don't want to force anyone to eat something they don't want to.
//prompt is a way for us to collect info from a user.
//Let's go first back to the browser and try this out before we write any code in our program.
//Type prompt("What is Your Name?") -- prints out name. But wait I have no way to grab that. It's escaped. Perhaps we should trap it in a variable.

//Now, try to write some code in our burger program that will prompt the user to choose a burger from the burgerMenu. Hint: use your powers of string concatenation to display the menu in your prompt.
//Trap their answer and console log it with a friendly message such as: "Good Choice! You chose hamburger"

var selection = prompt("Please choose Burger from the following menu: " + burgerMenu)
console.log("Good Choice! You chose " + selection)


//But wait, maybe we don't want to log to console. Perhaps we want some other kind of visual feedback. Let's write an alert. Try it in console first.

//let's swap the alert for the console.log

var selection = prompt("Please choose Burger from the following menu: " + burgerMenu)
alert("Good Choice! You chose " + selection)


//Now write program that logs the appropriate meat, cheese, or protein based on the burger selection. Alert the user of their chose with a polite message such as "You've selected hamburger with Bison"

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


//Exercise - Go to the MDN docs and look you the following methods: .split, .toLowerCase, toUpperCase, .repeat. Play with it and figure out how it works, and then we'll have people explain what each one does.


// Now let's explain a clever string method called search. Let's play around in the console first.
// We'll called .search on with a string to look for within the larger string.
// var string = "Hello, my name is Maria"
// string.search("Maria") ---> It returns 18. 18 is the index it appears at. Let's try searching for something that's not in the string. string.search("Craword")It returns -1. Keep that in your back pocket.



//Write a program that first takes input from the user about what type of burger they would like and (based on that) the type of (meat, cheese, or protein) they crave. Then search to see if a protein is available for that burger. If it's not available, alert the user that it is not available. If it is available, alert the user that they are in luck. Hint: you may need some nested if statements.

var burger = prompt("Choose a burger to search " + burgerMenu);

if(burger === "Hamburger"){
  var meat = prompt("Which meat do you crave? Choose from: " + hamBurger)
  if(hamBurger.search(meat) != -1){
    alert("You're In luck!")
  }else{
    alert("Not Available for this burger");
  }
} else if(burger === "Cheeseburger"){
  var cheese = prompt("What kind of cheese do you crave? Choose from: " + cheeseBurger
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



