// A pandigital number contains all digits(0 - 9) at least once.Write a
// function that takes an integer, returning true
// if the integer is pandigital, and false otherwise.

// Examples
// isPandigital(98140723568910)➞ true

// isPandigital(90864523148909)➞ false
// // 7 is missing.

// isPandigital(112233445566778899)➞ false


/////////////////////

const t1 = 132458760
let t2 = 98140723568910
const t3 = 112233445566778899n //for numbers bigger than 2^53. put 'n' at the end of number..

const controleArr = Array.from({
    length: 10
}, (v, k) => k)

const compare = (param) => {
    const res = controleArr.filter(i =>
        !param.toString().includes(`${i}`)
    )
    return res.length > 0 ? `${res} false` : true
}
console.log("ali", compare(t1))