const without = function(arr, elements) {
  let result = [];

  for (let el of arr) {
    if (!elements.includes(el)) {
      result.push(el);
    }
  }
  
  return result;
};

module.exports = without;