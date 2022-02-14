const countLetters = function(str) {
  let count = {};

  for (let ch of str) {
    if (ch !== " ") {
      count[ch.toUpperCase()] === undefined ? count[ch.toUpperCase()] = 1 : count[ch.toUpperCase()]++;
    }
  }

  console.log(count);

  return count;
};

module.exports = countLetters;