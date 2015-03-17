//If you want to export a complete object in one assignment, user module.exports

module.exports = function(width) {
  return {
    area: function() {
      return width * width;
    },
    perimeter: function() {
      return width * 4;
    }
  };
}

