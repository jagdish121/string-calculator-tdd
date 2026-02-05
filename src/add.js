function add(numbers) {
  if (numbers === "") return 0;

  let delimiters = [",", "\n"];

  if (numbers.startsWith("//")) {
    const [header, rest] = numbers.split("\n");
    numbers = rest;

    const matches = header.match(/\[(.*?)\]/g);
    delimiters = matches
      ? matches.map(d => d.slice(1, -1)) // remove [ ]
      : [header[2]];
  }

  // Escape delimiters for regex
  const escapedDelimiters = delimiters.map(d =>
    d.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
  );

  const delimiterRegex = new RegExp(escapedDelimiters.join("|"));

  const splitOutput = numbers
    .split(delimiterRegex)
    .map(Number);

  const negatives = splitOutput.filter(n => n < 0);
  if (negatives.length) {
    throw new Error(`negatives not allowed: ${negatives.join(", ")}`);
  }

  return splitOutput
    .filter(n => n <= 1000)
    .reduce((a, b) => a + b, 0);
}

module.exports = add;
