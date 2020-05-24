// //Create a function that takes a string and censors words over four characters with *.
// //Examples
// censor("The code is fourty"); // "The code is **"

// censor("Two plus three is five"); // "Two plus *** is five"

// censor("aaaa aaaaa 1234 12345"); // "aaaa ** 1234 **"



const censor = (stringValue) => {
    const returnArr = stringValue.split(' ');
    const newValue = [];
    returnArr.forEach((el) => {
        if (el.length > 4) {
            newValue.push(
                el
                    .split("")
                    .map((el) => "*")
                    .join("")

            );
        } else {
            newValue.push(el);
        }
    });
    console.log(newValue.toString());
}