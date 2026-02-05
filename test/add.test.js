const add = require("../src/add");

test("returns 0 for empty string", () => {
  expect(add("")).toBe(0);
});

test("returns number for single value", () => {
  expect(add("1")).toBe(1);
});

test("returns sum of two comma separated numbers", () => {
  expect(add("1,2")).toBe(3);
});

test("handles unknown amount of numbers", () => {
  expect(add("1,2,3,4")).toBe(10);
});

test("supports new lines as delimiters", () => {
  expect(add("1\n2,3")).toBe(6);
});

test("supports custom delimiter", () => {
  expect(add("//;\n1;2")).toBe(3);
});

test("ignores numbers greater than 1000", () => {
  expect(add("2,1001")).toBe(2);
});

test("throws on negative numbers", () => {
  expect(() => add("1,-2")).toThrow("negatives not allowed: -2");
});

test("lists all negative numbers", () => {
  expect(() => add("1,-2,-3")).toThrow("negatives not allowed: -2, -3");
});

test("supports multiple delimiters", () => {
  expect(add("//[*][%]\n1*2%3")).toBe(6);
});

test("supports delimiter of any length", () => {
  expect(add("//[***]\n1***2***3")).toBe(6);
});

