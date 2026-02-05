function add(numbers) {
  if (numbers === "") return 0;

  return numbers
  .split(/,|\n/)
  .map(Number)
  .filter(n => n <= 1000)
  .reduce((a, b) => a + b, 0);
}

module.exports = add;
