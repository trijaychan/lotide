const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");

assertEqual(true, eqArrays([1, 2], [1, 2]));
assertEqual(false, eqArrays([2, 2], [1, 2]));