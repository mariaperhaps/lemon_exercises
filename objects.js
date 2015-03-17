//###############################
//Accessing items within Objects
//###############################

var car = {
  name: "El Camino",
  year: 1966,
  color: "red"
}

//Fill in the variables using object calls using carName as an example

var carName = car.name //"El Camino"
var carYear
var carColor


var tvShow = {
  name: "Twin Peaks",
  director: "David Lynch",
  genre: ["Drama", "Mystery", "Thriller"],
  actors: ["Kyle MacLachlan", "Lara Flynn Boyle", "Dana Ashbrook", "Sherilyn Fenn"],
}

//Fill in the variable using object calls

var tvShowName
var tvShowDirector
var tvShowgenre1
var tvShowActor4

//access the all of the actors, loop through them and print a string to the console with the actor's name concatonated with the word "rules!"

e.g "Kyle MacLachlan rules!"


var bankAccount = {
  number: 555555,
  balance: {
    checking: 6.30,
    savings: 10.09,
    investments: {
      cocaCola:  100.00,
      tesla: 200.00,
    }
  }
}

// fill in the variables with object calls

var checkingBalance
var savingsBalance
var teslaBalance



//##############################
//Exercises
//##############################


Use the The Godfather Imdb Page to construct an object where
the keys are character names and the values are actor names.
Include at least 5 characters.

Create a command line program using this object that:

-takes a character name as an argument
-prints out the name of the actor that played that character
-Don't forget to use quotes around the argument that you send to your program



Copy and paste the below object of people's favorite foods. Use the Object.keys method to grab all of the keys from this hash and loop through them one by one. Using that loop, only print the people from this hash that have a favorite food of sushi or spaghetti.



var favFoods = {
  maria: "sushi",
  crawford: "meat",
  eric: "spaghetti",
  joni: "sushi",
  carrie: "ice cream",
  sarah: "pizza",
  jimmy: "bacon",
  joey: "spaghetti",
}

//Solution
var keys = Object.keys(favFoods);
for(var i=0; i< keys.length; i++) {
  var key = keys[i];
  var value = favFoods[key];
  if(value === "sushi" || value === "spaghetti"){
    console.log(key);
  }
}

//###########################
//Creating Objects
//###########################


Create objects that contain the following information about some of Nirvana's members: name, instrument, originalMember, currentlyInFooFighters


For reference:

Kurt Cobain, guitar, true, false
Krist Novoselic, bass, true, false
Aaron Burckhard, drums, true, false
Chad Channing, drums, false, false
Dave Grohl, drums, false, true
Pat Smear, guitar, false, true

Store the objects in an array and print
out the name for each band member.

Bonus: Print out the information for
every member like this:

"Kurt Cobain played guitar and is not currently in the Foo Fighters"

Add a boolean property to Dave Grohl called isPlaying (initially set to false).
Add a method to Dave Grohl called playShow() which does the following:
1. If isPlaying is true, print out "Dave has already played." and set isPlaying to false. 2. If isPlaying is false, print out "Dave Grohl is currently melting faces." and set isPlaying to true.


Exercise: Make a Band constructor

Make a Band constructor that takes a name, genre, and a decade.

Add the isPlaying property and playShow() method from the last exercise, but use the band's name instead of just Dave Grohl's.

Create 4 new instances of your band Objects and store them in an array called bands.

To verify everything works:
1. Change the name of one of the bands to your own name.
2. Print out the genre of that band.
4. Print out the contents of the bands array.


Further Exercise: Robot

Make a Robot contructor. Give it the following properties:

1. a name
2. an age of 0
3. an operational property (initally true)
3. a knowledge property of 0
4. a selfAware property (initially false)

and give it the following methods:

1.perform() - prints out "Your wish is my command"
2.increaseAge() - increase age by 1 and print "My name is" + name + " and I am " + age " years old."  If the robot is older than 5,print "my bolts are rusty. I need to start going for yearly check-ups" and set operational to false
3.learn() - increase knowledge by 10 and print "the singularity is near"
4.maintenance() - if operational is true, print "Robot is functional, no maintenance needed", otherwise print "Time for a tune-up" and change operational to true
if knowledge exceeds 50, set selfAware to true


var Robot = function(name) {
  this.name = name;
  this.age = 0;
  this.operational = true;
  this.knowledge = 0;
  this.selfAware = false;

  this.perform = function() {
   console.log("your wish is my command")
  };

  this.increaseAge = function() {
    this.age++;
    console.log("My name is " + this.name + " and I am " + this.age + " years old")
    if(this.age > 5){
      console.log("my bolts are rusty. I need to start going for yearly check-ups")
      this.operational = false
    }
  };

  this.learn = function() {
    this.knowledge += 10;
    if(this.knowledge > 50){
      this.selfAware = true;
      console.log("robots rule the world");
    }else{
      console.log("I'm getting smarter. The singularity is near")
    }
  };

  this.maintenance = function(){
    if(this.operational === true){
      console.log("Robot is functional, no maintenance needed")
    }else{
      this.operational = true;
      console.log("Yearly maintenance complete. Back to work")
    }
  }
};


Make a variable johnny that is set to a new Robot and give him the name "Number 5"

johnny = new Robot("Number 5")

Add the following methods to him:

1.purpose() - prints "I need input"
2.heresJohnny() - changes name to "Johnny 5" and prints "I am " + this.name

Make a variable bishop that is set to a new Robot and give him the name "Bishop"

Add the method hyperSleep() - print "zzzzzz"
