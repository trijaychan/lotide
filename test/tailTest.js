const assertArraysEqual = require("../assertArraysEqual");
const tail = require("../tail");

assertArraysEqual([2, 3], tail([1, 2, 3]));
assertArraysEqual([2, 2], tail([1, 2, 2]));