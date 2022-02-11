const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
        if (Array.isArray(object1[key1]) && Array.isArray(object2[key2])) {
          found = eqArrays(object1[key1], object2[key2]);
        } else if (typeof object1[key1] === "object" && typeof object2[key2] === "object"){
          found = eqObjects(object1[key1], object2[key2]);
        } else if (!found) {
          found = object1[key1] === object2[key2];
        }
      }

      if (!found) {
        return false;
      }
    }
  }

  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);