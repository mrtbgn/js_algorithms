const lastLetterTake = (str) => {
  let array = str.split(" ");
  let newArr = [];

  for (let i = 0; i < array.length; i++) {
    let itemArr = array[i];

    for (let k = 0; k < itemArr.length; k++) {
      if (k === itemArr.length - 1) {
        newArr.push(itemArr[k]);
      } else {
      }
    }
  }
  return console.log(newArr);
};
lastLetterTake("salt hack your future code for all");
