function add(numbers) {
  if (numbers === "") return 0;

  return numbers
    .split(/,|\n/)
    .map(Number)
    .reduce((a, b) => a + b, 0);
}

module.exports = add;
