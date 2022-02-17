//TODO: Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
//createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

function createPhoneNumber(numbers){
    let phoneNumber = '(';
    numbers.forEach((number, i) => { // you can pass in 3 parameters with a forEach loop or pass in the whole array
        if(i === 2) {
            phoneNumber += `${number}) `;
        } else if (i === 5) {
            phoneNumber += `${number}-`;
        } else {
            phoneNumber += `${number}`;
        }
    })
    return phoneNumber;  //return should be outside forEach loop but not always required. In this case the variable phoneNumber was initialized outside the forEach loop
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

