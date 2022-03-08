const sum = (num1, num2) => {
  return (num1 || 0) + (num2 || 0);
};
const Dynamicsum = (...numbers) => {
  return numbers.reduce((x, y) => {
    x + y;
  }, 0);
};
module.exports = sum;
