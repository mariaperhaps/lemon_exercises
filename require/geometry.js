var rectangle = require('./rectangle.js');
var square = require('./square.js')

var perimeter = rectangle.perimeter(2,4);
console.log(perimeter);

var area = rectangle.area(3,4);
console.log(area);


var mySquare = square(2);
console.log(mySquare.area())
console.log(mySquare.perimeter())
