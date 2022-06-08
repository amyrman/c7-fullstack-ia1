import feedback from '../index.js'

test('a - b -> incorrect', () => {
  const result = feedback("a", "b");
  console.log(result);
  expect(result).toEqual([
    { letter: "A", result: "incorrect" },
  ]);
});

test('abc - abc -> correct, correct, correct', () => {
  const result = feedback("abc", "abc");
  console.log(result);
  expect(result).toEqual([
    { letter: "A", result: "correct" },
    { letter: "B", result: "correct" },
    { letter: "C", result: "correct" },
  ]);
});

test('a - A -> correct', () => {
  const result = feedback("a", "A");
  console.log(result);
  expect(result).toEqual([
    { letter: "A", result: "correct" },
  ]);
});

test('A - a -> correct', () => {
  const result = feedback("A", "a");
  console.log(result);
  expect(result).toEqual([
    { letter: "A", result: "correct" },
  ]);
});
