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

module.exports = flatten;