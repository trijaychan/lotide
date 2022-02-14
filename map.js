const map = (arr, callback) => {
  let result = [];

  for (el of arr) {
    result.push(callback(el));
  }

  return result;
};

module.exports = map;