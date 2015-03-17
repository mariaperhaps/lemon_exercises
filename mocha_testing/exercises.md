##Exercise - Requiring Files

Make a directory called geocalcs and create three files within it: geometry.js, rectangle.js, square.js

In the rectangle.js file, write two appropriately named functions. One should return the perimeter of a rectangle and the other should return the area.

Add your functions to the special exports object.

Example:

```js
exports.gaga = function(){
  return "My Poker Face"
}
```

Now, in your geometry.js file, write a program that, when run in node, will log the area and perimeter of a rectangle.


##Exercise - Export a Constructor

Touch file in the same directory called square.js.

In the square.js, using module.exports and a function contructor, return both the perimeter and the area of a square.

Example:

```js
module.exports = function(name){
  return {
    helloEnglish: function(){
      return "hello " + name;
    },
    helloSpanish: function(){
      return "hola " + name;
    }
  };
}
```

Add to your geometry.js program the functionality to call these newly written functions.


##Exercises - Testing

**Write Some Tests around Strings**

Write some tests to check for the following "user stories" for the `indexOf` method on `String`.  Try to use your `describe`s properly.

Given the following String: "In a hole in the ground, there lived a hobbit.",
`indexOf` should:
1. Return `0` for "In a hole"
2. Return `3` for "hole"
3. Return `17` for "ground"
4. Return `39` for "hobbit"
5. Return `-1` for "Bilbo"

**Shopping Cart

Given the following Shopping Cart object:

```js
var ShoppingCart = function() {
  this.items = [];
  this.addItem = function(item) {
    this.items.push(item);
  };

  this.removeItem = function(item) {
    var index = this.items.indexOf(item);
    if(index > -1) {
      this.items.splice(index, 1);
      return true;
    } else {
      return false;
    }
  };

  this.checkout = function() {
    var message = "You have purchased the following items:\n";
    message += this.items.join("\n");
    this.items = [];
    return message;
  }
};
```
Write the following tests:

`items`
  - should be empty when the shopping cart is initiated.

`addItem`
  - should add a single item to the list of items

`removeItem`
  - should return true if an item is removed
  - should remove an item if it exists
  - should return false if an item does not exist

`checkout`
  - should return a message with all the items in the shopping cart
  - should empty the items in the shopping cart


# Exercise: Wizard

Create a `Wizard` constructor function and test it with mocha.

Here are the user stories for the Wizard:
* A wizard can cast a spell.
* A wizard can cast 5 spells before they run out of magic.
* A wizard's magic can be regenerated to 5 spells
* A wizard can be hit by a spell
* A wizard can be hit a maximum of 2 times before they die
* A dead wizard cannot cast spells
* A dead wizard can be brought back from the dead

# Exercise: Email Address generator
Given the following email addresses:

| Name | Email |
|:---- |:----- |
| Eric Shmidt | eshmidt@google.com |
| Sergey Brin | sbrin@google.com |
| Sean West| sean.west@generalassemb.ly|
| Crawford Forbes| crawford.forbes@generalassemb.ly|
| Meryl Streep | meryl@oscars.com |
| Daniel Day-Lewis | daniel@oscars.com |

Develop code which can predict the email addresses for the following:

| Name | Company |
|:---- |:----- |
| Larry Page | google.com |
| Olivia Grosvenor | ga.co |
| Jack Nicholson | oscars.com |


Start from high level - what should top level interaction look like? Think a little about implementation. Start, try to write a test. Keep trying to write tests until you actually can write something simple.
