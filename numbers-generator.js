const createMapForLetter = (start, end) => {
  const map = new Map();
  for (let i = start; i<=end; i++) {
    map.set(i, i);
  }
  return map;
}

function numnbersGenerator () {
  const bingo = new Map();
  bingo.set('b', createMapForLetter(1, 15));
  bingo.set('i', createMapForLetter(16, 30));
  bingo.set('n', createMapForLetter(31, 45));
  bingo.set('g', createMapForLetter(46, 60));
  bingo.set('o', createMapForLetter(61, 75));

  const cardNumbers = new Map();
  const keys = Array.from(bingo.keys());

  for (let i = 0; i < keys.length; i++) {
    const currentLetter = keys[i];
    for (let j = 0; j < 5; j++) {
      const currentNumberSet = bingo.get(currentLetter);
      const keys = Array.from(currentNumberSet.keys());
      const randomIndex = Math.floor(Math.random() * (keys.length-1));
      const randomKey = keys[randomIndex];
      const current = cardNumbers.get(currentLetter) || [];
      current.push(currentNumberSet.get(randomKey));
      cardNumbers.set(currentLetter, current);
      currentNumberSet.delete(randomKey);
    }
  }
  return cardNumbers;
}

export default numnbersGenerator;