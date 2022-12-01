import numnbersGenerator from './numbers-generator.js';

class Card {
  constructor(generateNumbers = numnbersGenerator) {
    this.numbers = generateNumbers();
  }

  get (key) {
    return this.numbers.get(key);
  }
}

export default Card;