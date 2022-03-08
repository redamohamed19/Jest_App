const input = name => {
  if (name) {
    name = name.trim();
  }
  return name || 'unknow';
};
module.exports = input;
