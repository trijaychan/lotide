const eqArrays = require("./eqArrays");

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

module.exports = eqObjects;