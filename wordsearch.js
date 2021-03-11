const wordSearch = (letters, word) => {
  const verticalArr = (letters) => {
    let verticalArr = [];
    for (let k = 0; k < letters[0].length; k++) {
      let string = "";
      for (let i = 0; i < letters.length; i++) {
        string += letters[i][k];
      }
      verticalArr.push(string);
    }
    return verticalArr;
  };
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  const verticalJoin = verticalArr(letters);
  for (let l of verticalJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};

module.exports = wordSearch;