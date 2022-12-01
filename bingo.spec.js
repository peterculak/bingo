import Card from './card.js';

it('generates bingo card', () => {
  const card = new Card();
  expect(card.numbers.size).toEqual(5);
  for (let key of card.numbers.keys()) {
    expect(card.get(key).length).toEqual(5);
  }
});