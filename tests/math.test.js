const { add, multiply } = require('../src/math');

test('adds two numbers correctly', () => {
  expect(add(2, 3)).toBe(5);
});

test('multiplies two numbers correctly', () => {
  expect(multiply(3, 4)).toBe(12);
});
