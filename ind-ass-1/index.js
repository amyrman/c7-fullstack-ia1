// TODO:
// ----------------------------------------------------
// - MAKE ALGORITHM FUNCTION WORK
// - MODULE: MOVE COMPARE FUNCTION TO SEPARATE FILE AND EXPORT
// - IMPORT INTO INDEX.JS
// - TESTING
//   - Create test strategy
//   - Create separate test-file
//   - Check Jest-documentation
//   - Document the test strategy with comments in test-code
//   - Create 2+ tests that verifies the compareFunction
//     - IF INPUT IS "CYKLA, HALLÅ", THEN OUTPUT IS EXPECTED TO BE:
//     - H / incorrect
//     - A / misplaced
//     - L / incorrect (eftersom det redan finns ett korrekt L)
//     - L / correct
//     - Å / incorrect
//     - TEST WITH SOME OTHER WORDS, E.G. "HALLÅ"-"ILLER",  "SPIRA"- "PROPP"
// ----------------------------------------------------

// Assignment 1: Algorithm A
// An algorithm, function(s), that defines rules for feedback when player tries to guess what the correct word is.

  // Define the problem:
  // CONTEXT:
  // The user needs to come up with a word and needs to know how close the word is to the correct one
  // WHEN the user makes a guess (input)
  // THEN the user gets feedback (output) about how the guess compares to the correct answer
