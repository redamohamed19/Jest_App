const a = require('../matchers');

test('array with length 3', () => {
  expect(a).toHaveLength(3);
});

test('array  have number 2', () => {
  expect(a).toContain(2);
});
test('array bot have 4 element', () => {
  expect(a).not.toHaveLength(4);
});

test('array  have number 7', () => {
  expect(a).not.toContain(7);
});

test('if all element are number', () => {
  for (let i = 0; i < a.length; i++) {
    expect(isNaN(a[i])).toBeFalsy();
  }
});
