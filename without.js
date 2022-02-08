const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

const without = function(arr, elements) {
  let result = [];

  for (let el of arr) {
    if (!elements.includes(el)) {
      result.push(el);
    }
  }
  
  return result;
};

const words = ["hello", "world", "lighthouse"];
assertArraysEqual(without(words, []), words);
assertArraysEqual(without(words, ["lighthouse"]), words);
assertArraysEqual(without(words, ["lighthouse", "world"]), words);