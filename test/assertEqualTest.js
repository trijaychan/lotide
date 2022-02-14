const assertEqual = require("../assertEqual");

assertEqual(1, 1);
assertEqual(1, "1");
assertEqual("dog", "dog");
assertEqual("dog", "cat");