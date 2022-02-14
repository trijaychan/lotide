const assert = require("chai").assert;
const assertObjectsEqual = require("../assertObjectsEqual");

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba);