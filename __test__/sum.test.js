const sum = require('../sum');
const Dynamicsum = require('../sum');
describe('check all cases of sum func', () => {
  test('with 0 args', () => {
    expect(sum()).toBe(0);
  });
  test('with 1 args', () => {
    expect(sum(5)).toBe(5);
  });
  test('with 2 args', () => {
    expect(sum(5, 14)).toBe(19);
  });

  test('with 0 args', () => {
    expect(Dynamicsum()).toBe(0);
  });
  test('with 1 args', () => {
    expect(Dynamicsum(5)).toBe(5);
  });
});
test('with 2 args', () => {
  expect(Dynamicsum(5, 14)).toBe(19);
});
