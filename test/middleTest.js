const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");

let arr = [1, 2];
assertArraysEqual([], middle(arr));

arr = [1, 2, 3];
assertArraysEqual([2], middle(arr));

arr = [1, 2, 3, 4, 5, 6];
assertArraysEqual([3, 4], middle(arr));