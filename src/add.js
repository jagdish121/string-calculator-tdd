function add(numbers) {
  if (numbers === "") return 0;

  if (numbers < 0) throw `negatives not allowed: ${numbers}`;

  let delimiter = /,|\n/;

  if (numbers.startsWith("//")) {
    const [header, rest] = numbers.split("\n");
    numbers = rest;
    delimiter = header[2];
  }

  const splitOutput = numbers.split(delimiter).map(Number);

  const negatives = splitOutput.filter((n) => n < 0);
  if (negatives.length) {
    throw new Error(`negatives not allowed: ${negatives.join(", ")}`);
  }

  return splitOutput.filter((n) => n <= 1000).reduce((a, b) => a + b, 0);
}

module.exports = add;
