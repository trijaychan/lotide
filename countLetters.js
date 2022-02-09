const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  let count = {};

  for (let ch of str) {
    if (ch !== " ") {
      count[ch.toUpperCase()] === undefined ? count[ch.toUpperCase()] = 1 : count[ch.toUpperCase()]++;
    }
  }

  console.log(count);

  return count;
};

let counted = countLetters("hello world");

assertEqual(counted["L"], 3);