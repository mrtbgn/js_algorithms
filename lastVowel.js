// Write a function that removes the last vowel in each word in a sentence.

// Examples
// removeLastVowel("Those who dare to fail miserably can achieve greatly.")
// ➞ "Thos wh dar t fal miserbly cn achiev gretly."

// removeLastVowel("Love is a serious mental disease.")
// ➞ "Lov s  serios mentl diseas"

// removeLastVowel("Get busy living or get busy dying.")
// ➞ "Gt bsy livng r gt bsy dyng"
// Notes
// Vowels are: a, e, i, o, u (both upper and lowercase).

const removeLastVowel = (sentence) => {
  let newArr = sentence.split(" ");
  for (i = 0; i < newArr.length; i++) {
    for (j = newArr[i].length - 1; j >= 0; j--) {
      if (
        newArr[i][j] == "a" ||
        newArr[i][j] == "e" ||
        newArr[i][j] == "i" ||
        newArr[i][j] == "o" ||
        newArr[i][j] == "u"
      ) {
        newArr[i] = newArr[i].slice(0, j) + newArr[i].slice(j + 1);
        break;
      }
    }
  }
  return newArr.join(" ");
};
console.log(removeLastVowel("Get busy living or get busy dying."));
