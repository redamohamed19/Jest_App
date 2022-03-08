const input = require('../handleInput');
describe('check the function yhat handle user input', () => {
  test('if name is empty return unknow', () => {
    expect(input()).toBe('unknow');
  });
  test('if name has space', () => {
    expect(input(' mohamed')).toBe('mohamed');
  });
});
