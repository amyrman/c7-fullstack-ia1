import compareStrings from '../index.js'

test('a - b -> incorrect', () => {
  const result = compareStrings("a", "b");
  console.log(result);
  expect(result).toEqual([
    { letter: 'A', result: "incorrect" },
  ]);
});

test('abc - abc -> correct, correct, correct', () => {
  const result = compareStrings("abc", "abc");
  console.log(result);
  expect(result).toEqual([
    { letter: 'A', result: "correct" },
    { letter: 'B', result: "correct" },
    { letter: 'C', result: "correct" },
  ]);
});

test('a - A -> correct', () => {
  const result = compareStrings("a", "A");
  console.log(result);
  expect(result).toEqual([
    { letter: 'A', result: "correct" },
  ]);
});

test('A - a -> correct', () => {
  const result = compareStrings("A", "a");
  console.log(result);
  expect(result).toEqual([
    { letter: 'A', result: "correct" },
  ]);
});
