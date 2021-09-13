// import the function sum from the app.js file
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test('one euro is 1.2 dollars', () => {
    //inside the test we call our dollarAmount function with 1 argument
    let dollarAmount = fromEuroToDollar(1);

    // we expect the dollar amount to be 1.2
    expect(dollarAmount).toBe(1.2);
});

test('one dollar is 106.5833 yens', () => {
    //inside the test we call our yenAmount function with 1 argument
    let yenAmount = fromDollarToYen(1);

    // we expect the dollar amount to be 1.2
    expect(yenAmount).toBe(106.58333333333334);
});

test('one yen is 85,26 pounds', () => {
    //inside the test we call our poundAmount function with 1 argument
    let poundAmount = fromYenToPound(1);

    // we expect the dollar amount to be 1.2
    expect(poundAmount).toBe(0.0052124055251498574);
});