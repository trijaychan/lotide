const assert = require("chai").assert;
const assertArraysEqual = require("../assertArraysEqual");
const assertEqual = require("../assertEqual");

describe("#assertArraysEqual", () => {
  it("assertion passes for [1, 2] and [1, 2]", () => {
    assertArraysEqual([1, 2], [1, 2])
  });
  it("assertion fails for [1, 1] and [2, 2]", () => {
    assertArraysEqual([1, 2], [2, 2]);
  });
});