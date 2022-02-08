// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅ Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("🛑 Assertion Failed: " + actual + " !== " + expected);
  }
};

// TEST CODE
assertEqual("same string", "same string");
assertEqual("string 1", "string 2");
assertEqual(10, 10);
assertEqual(2, 4);