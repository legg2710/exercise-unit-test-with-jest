// import the function sum from the app.js file
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2) dollars
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(dollars);
})

test("One dollar should be 106.58 yen", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    // use the function like its suppoed to be used
    const yen = fromDollarToYen(3.6)

    // if 1 dollar are 106.58 yen, then 3.6 dollar should be ((3.6/1.2) * 127.9) yen
    const expected = (3.6/1.2)*127.9; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(yen);
})

test("One yen should be 0.00625 pounds", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js')

    // use the function like its suppoed to be used
    const pound = fromYenToPound(383.7)

    // if 1 yen are 0.00625 pounds, then 383.7 yen should be ((383.7/127.9)*0.8) pounds
    const expected = (383.7/127.9)*0.8; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(pound);})