// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:

// Check if a credit card number is valid
// Returns true when valid and false when invalid
const validateCred = (arr) => {
    let luhnArr = []
    let double = false
    let toAdd = 0
    // double every second digit, if digit is above 10, subtracts nine
    // adds new digit to beginning of array
    for(let i = arr.length - 1; i >= 0; i--){
        toAdd = arr[i]
        if(double){
            toAdd = toAdd * 2
            if(toAdd > 10){
                toAdd = toAdd - 9
            }
            luhnArr.unshift(toAdd)
            double = false
        }else{
            luhnArr.unshift(toAdd)
            double = true
        }
    }
    let sum = sumArr(luhnArr);
    if(sum % 10 === 0){
        return true
    }else{
        return false
    }
}

// takes an array of credit card arrays and checks which are invalid
// returns an array in valid cards
const findInvalidCards = (batch) => {
    let ret = []
    for(card of batch){
        if(validateCred(card) === false){
            ret.push(card)
        }
    }
    return ret
}

// takes an array of invalid card numbers
// returns an array of corresponding companies
const idInvalidCardCompanies = (batch) => {
    let ret = []
    for(card of batch){
        if(card[0] === 3 && !ret.includes('Amex (American Express)')){
            ret.push('Amex (American Express)')
        }else if(card[0] === 4 && !ret.includes('Visa')){
            ret.push('Visa')
        }else if(card[0] === 5 && !ret.includes('Mastercard')){
            ret.push('Mastercard')
        }else if(card[0] === 6 && !ret.includes('Discover')){
            ret.push('Discover')
        }
    }
    return ret;
}

// Adds all digits in array
const sumArr = (arr) => {
    let ret = 0
    for(let i = 0; i < arr.length; i++){
        ret = ret + arr[i]
    }
    return ret
}

// takes an array and a string
// return true if that string is already found in the array
// should just use .includes() instead
/*
const noRepeat = (arr, value) => {
    return arr.some((arrValue) => value === arrValue)
}
*/

let test = findInvalidCards(batch);
console.log(idInvalidCardCompanies(test))


/*
&& noRepeat(ret, 'Amex (American Express)'
&& noRepeat(ret, 'Visa')
&& noRepeat(ret, 'Mastercard')
&& noRepeat(ret, 'Discover')
*/



