const assertEqual = require("../assertEqual");
const head = require("../head");

assertEqual(1, head([1, 2, 3]));
assertEqual(1, head([2, 2, 2]));