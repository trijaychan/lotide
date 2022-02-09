const eqArrays = function(arr1, arr2) {
  if (!Array.isArray(arr1) && !Array.isArray(arr1)) {
    if (arr1 === arr2) {
      return true;
    }

    return false;
  } else if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    let found;

    for (let key1 in object1) {
      found = false;

      for (let key2 in object2) {
        if (eqArrays(object1[key1], object2[key2])) {
          found = true;
        }
      }

      if (!found) {
        return false;
      }
    }
  }

  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let output;

  eqObjects(actual, expected) ? output = `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}` : `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;

  console.log(output);
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba);