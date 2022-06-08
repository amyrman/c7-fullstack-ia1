import feedback from '../feedback.js'

// Test incorrect checks
test('a - b -> incorrect', () => {
  const result = feedback("a", "b");
  console.log(result);
  expect(result).toEqual([
    { letter: "A", result: "incorrect" },
  ]);
});

// Test correct checks with several letters
test('abc - abc -> correct, correct, correct', () => {
  const result = feedback("abc", "abc");
  console.log(result);
  expect(result).toEqual([
    { letter: "A", result: "correct" },
    { letter: "B", result: "correct" },
    { letter: "C", result: "correct" },
  ]);
});

//Test case insensitivity
test('a - A -> correct', () => {
  const result = feedback("a", "A");
  console.log(result);
  expect(result).toEqual([
    { letter: "A", result: "correct" },
  ]);
});

//Test case insensitivity
test('A - a -> correct', () => {
  const result = feedback("A", "a");
  console.log(result);
  expect(result).toEqual([
    { letter: "A", result: "correct" },
  ]);
});
