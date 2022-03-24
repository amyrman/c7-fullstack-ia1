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

function compareStrings(answer, guess) {

  const answerArr = answer.split("");
  const guessArr = guess.split("");
  const output = [];

  // Log for exec order clarity
  console.log(`\nAnswer array: ${answerArr}`);
  console.log(`Guess array:  ${guessArr}`);

  // The strings need to be looped through or similar i.e. with .map, forEach, for, or some string method? And for every index the value (letter) needs to be checked
  for (let i = 0; i < answerArr.length; i++) {

    if (guessArr[i] === answerArr[i]) {

      // Log for clarifying exec order in console
      console.log(`\n${guessArr[i]} is CORRECT - pushing to output...`);

      // Push to (insert in) output array -- needs to be at same index
      output.push({"letter": guessArr[i], "result": "correct"});

      // Problem when splicing:
      // Everything after 'correct' gets spliced
      // Solution: Add "+1" OUTSIDE the "[]"

      // Splice (delete) iterated letters
      // guessArr.splice([i], 1);
      // answerArr.splice([i], 1);

      // If splicing: log arrays w/ msg for exec order clarity 
      // console.log(`Answer array is now: ${answerArr}`);
      // console.log(`Guess array is now:  ${guessArr}`);

    } else if (guessArr[i] !== answerArr[i] && answerArr.includes(guessArr[i])) {

        // Log for clarifying exec order in console
        console.log(`\n${guessArr[i]} is MISPLACED - pushing to output...`);

        // Push to (insert in) output array -- needs to be at same index
        output.push({"letter": guessArr[i], "result": "misplaced"});

        // Splice (delete) iterated letters
        // guessArr.splice([i], 1);
        // answerArr.splice([i], 1);

        // If splicing: log arrays for exec order clarity 
        // console.log(`Answer array is now: ${answerArr}`);
        // console.log(`Guess array is now:  ${guessArr}`);

      } else {

      // Log for clarifying exec order in console
      console.log(`\n${guessArr[i]} is INCORRECT - pushing to output...`);
      output.push({"letter": guessArr[i], "result": "incorrect"})

      //     guessArr.splice([i], 1);
      //     answerArr.splice([i], 1);

      // console.log(`Answer array is now: ${answerArr}`);
      // console.log(`Guess array is now:  ${guessArr}`);
    }
  }
  console.log("\nOutput array: ");
  console.log(output);

}

// Call function to test if correct works
// compareStrings("CYKLA", "CYKLA");

// Differing guess-answer combinations
compareStrings("CYKLA", "HALLÅ");
// compareStrings("HALLÅ", "ILLER");
// compareStrings("SPIRA", "PROPP");
