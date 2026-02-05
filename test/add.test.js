const add = require("../src/add");

test("returns 0 for empty string", () => {
  expect(add("")).toBe(0);
});
