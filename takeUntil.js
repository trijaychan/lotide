const takeUntil = function(array, callback) {
  let result = [];
  let i = 0;

  while (!callback(array[i])) {
    result.push(array[i]);
    i++;
  }

  return result;
};

module.exports = takeUntil;