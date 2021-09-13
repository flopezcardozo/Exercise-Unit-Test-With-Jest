console.log("Hello World");

//this is my function that sums two numbers
const sum = (a,b)=> {
    return a+b
}

//just a console log for ourselves
console.log(sum(7,3));

//export the function to be used on other files
//similar to the keyword `export` when using webpack


// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromEuroToDollar (euroAmount){
    let dollarAmount = euroAmount * 1.2;
    return dollarAmount;
}

function fromDollarToYen (dollarAmount){
    let yenAmount = (dollarAmount / 1.2) * 127.9;
    return yenAmount;
}

function fromYenToPound (yenAmount){
    let poundAmount = ((yenAmount /127.9)/1.2)* 0.8;
    return poundAmount;
}

module.exports = {sum, fromEuroToDollar,fromDollarToYen, fromYenToPound};