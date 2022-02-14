const countOnly = function(allItems, itemsToCount) {
  let count = {};

  for (let key in itemsToCount) {
    if (itemsToCount[key] === true) {
      for (let item of allItems) {
        if (item === key) {
          count[key] === undefined ? count[key] = 1 : count[key]++;
        }
      }
    }
  }
  return count;
};

module.exports = countOnly;