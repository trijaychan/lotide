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

const flatten = function(input) {
  let arr = [];

  if (Array.isArray(input)) {
    let subArr;

    for (let el of input) {
      subArr = flatten(el);

      for (let el of subArr) {
        arr.push(el);
      }
    }
  } else {
    arr.push(input);
  }

  return arr;
};

let array = [1, 2, [3, 4], 5, [6]];
let flattened = flatten(array);

console.log(array);
console.log(flattened);

assertArraysEqual(array, flattened);