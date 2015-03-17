var assert = require("assert");
  describe("#length", function() {
      it("should return 0 when nothing has been added", function() {
        assert.equal(0, [].length);
        assert.notEqual(0, ["something"].length);
      });

      it("should return 1 when something has been added", function() {
        assert.equal(1, ["something"].length);
      });

  var arr;
  var element;

  describe("#push", function() {
    beforeEach(function() {
      arr = [];
      element = "element";
      arr.push(element);
    });

    it("should add an element to the end of the array.", function() {
      assert.equal(1, arr.length);
      assert.equal(element, arr[0]);
    });

    it("should allow us to add another element to the array.", function() {
      arr.push(element);
      assert.equal(2, arr.length);
    });
  });
});
