function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = /,|\n/;

  if (numbers.startsWith("//")) {
    const [header, rest] = numbers.split("\n");
    numbers = rest;
    delimiter = header[2];
  }
  
  return numbers
  .split(delimiter)
  .map(Number)
  .filter(n => n <= 1000)
  .reduce((a, b) => a + b, 0);
}

module.exports = add;
