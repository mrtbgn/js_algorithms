// Examples
// sevenBoom([1, 2, 3, 4, 5, 6, 7])➞
// "Boom!"

// sevenBoom([8, 6, 33, 100])➞
// "there is no 7 in the array"

// sevenBoom([2, 55, 60, 97, 86])➞
// "Boom!

const boomArr = [2, 55, 60, 97, 86]; // "boom"

const cheackSeven = (arr) =>
    arr.some((num) => `${num}`.includes("7"))
        ? "BOOM!!"
        : "There is no 7 in array body";

console.log(cheackSeven(boomArr));