const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("returns [] for [2]", () => {
    assert.deepEqual(tail([2]), []);
  });
});