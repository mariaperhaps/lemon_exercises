##MODULES

"A beginning programmer writes her programs like an ant builds her hill, one piece at a time, without thought for the bigger structure. Her programs will be like loose sand. They may stand for a while, but growing too big they fall apart.

Realizing this problem, the programmer will start to spend a lot of time thinking about structure. Her programs will be rigidly structured, like rock sculptures. They are solid, but when they must change, violence must be done to them.

The master programmer knows when to apply structure and when to leave things in their simple form. Her programs are like clay, solid yet malleable."

-**Eloquent Javascript**


Modules divide programs into clusters of code that, by some criterion, belong together.

Consider our code as a book and the different sections as chapters.

Books are broken up into chapters so that the reader can see how the program is built and more easily find specific parts that they are interested in.

Organizing our programs with modules has similar benefits. The structure helps people who are not familiar with the code find what they are looking for more easily. It also makes it easier on the programmer to keep things that are related close together.

##Module Basics

-A module is just a reusable chunck of code abstacted into a more user-friendly package.

-Modules should have very specific purpose

-Modules are small programs that do one thing, do it well, and compose easily with other programs.


**We can make our own modules within our programs by learning how to export and require files**

-make a directory in today's classwork called "geometry"
-cd into it and touch a file square.js and a file geometry.js
-open up your square.js file and write a function contructor that create a square object.
-Give your square two methods, area and perimeter that define function that will return the area and perimeter.

```js
var Square = function(width){
  this.width = width;
  this.area = function(){
    return width * width;
  },
  this.perimeter = function(){
    return width * 4;
  }
}
```

We created a chunk of code that has a very specific purpose, to deal with geometric calculations for a square. In order to use this in other programs, let's add the line

```js
module.exports = Square
```

This defines what we are making availble from this module.

Now let's go to our geometry.js file. Inside, we would like to be able to reference the code from the sqaure file. To do this, we need to define a variable and set it equal to the filepath.

The module loading system in Node works like this: If the file is in the same directory that we're in, write it like this:

```js
var Square = require('./square.js')
```

Now we can use this Object in the geometry file like this:

```js
var mySquare = new Square(2);
console.log(mySquare.area())
console.log(mySquare.perimeter())
```

-touch a file circle.js
-use a function constructor to make a circle object with methods for area and circumference.
Hint: Do a bit of googling to find out how to use PI in javascript.
-make a new circle object in your geometry file and call area and circumference on it.

**circle.js**

```js
var Circle = function(radius){
  this.radius = radius;
  this.area = function(){
    return Math.PI * radius * radius;
  },
  this.circumference = function(){
    return 2 * Math.PI * radius;
  }
}

module.exports = Circle;
```

**geometry.js**

```js
var Circle = require('./circle.js');
var myCircle = new Circle(4);
console.log(myCircle.area());
console.log(myCircle.circumference());
```

Now try to turn your geometry.js file into a command line program that will allow us to calculate the area & perimeter or the area and circumerence for a given shape and return a string like: "The area of your square is 4 and its perimeter is 8.

```js
var Square = require('./square.js');
var Circle = require('./circle.js');
var shape = process.argv[2].toLowerCase();
var measurement = parseInt(process.argv[3]);

var geoCal = function(shape, measurement){
  if(shape === "circle"){
    var myCircle = new Circle(measurement);
    return "Your " + shape + " has an area of " + myCircle.area() + " and a circumference of " + myCircle.circumference()
  } else if(shape === "square") {
    var mySquare = new Square(measurement);
    return "Your " + shape + " has an area of " + mySquare.area() + " and a perimeter of " + mySquare.perimeter()
  } else {
    return "I'm not sure what you're talking about. We haven't gotten that far in geometry class"
  }
}

console.log(geoCal(shape, measurement));
```


