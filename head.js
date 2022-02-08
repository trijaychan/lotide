const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Pailed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(arr) {
  return arr[0];
};