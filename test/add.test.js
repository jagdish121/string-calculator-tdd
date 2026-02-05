const add = require("../src/add");

test("returns 0 for empty string", () => {
  expect(add("")).toBe(0);
});

test("returns number for single value", () => {
  expect(add("1")).toBe(1);
});
