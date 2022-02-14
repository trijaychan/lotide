const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      results[sentence[i].toLowerCase()] === undefined ? results[sentence[i].toLowerCase()] = [i] : results[sentence[i].toLowerCase()].push(i);
    }
  }

  return results;
};

module.exports = letterPositions;