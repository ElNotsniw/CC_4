// Task 1 - Customer Discounts

var purchaseamount = 150;       // Starting price for the product

let finalamount;                // Setting up the ifelse discount condition if amount exceeds $100

if (purchaseamount > 100) {
    finalamount = purchaseamount * 0.85
} else {
    finalamount = purchaseamount
};

console.log(`Grand Total after applicable discount: $${finalamount}`);      // Final output after applicable discounts






// Task 2 - Sales Report

let sales = [50, 100, 150, 200, 250, 300];           // Original output to start calculating the total of these six values
let totalsales = 0                                  // Have to declare totalsales at 0 to then add up all the values from sales

for (let i = 0; i < sales.length; i++) {            // for loop to help add all the values together to get the totalsales
    totalsales += sales[i];
    
};

console.log(`Total Sales: $${totalsales}`);          // Final output after adding up all values





// Task 3 - Inventory Depletion

let stock = 10;                         // Declaring stock to have an inital value of 10

while (stock > 0) {                                 // while loop to deplete the stock value by 1 each time until it reaches 0
    console.log(`Stock remaining: ${stock}`);
    stock--;
};

console.log(`Stock is now zero.`)                   // Final output after stock has reached 0






// Task 4 - Customer Survey

let responses = 0                       // Original ouput with responses at 0

do {                                    // dowhile loop to collect responses until it reaches 3
    responses++;
    console.log(`Response count: ${responses}`)
} while (responses < 3);

console.log(`Collected 3 responses.`)       // Final output when responses gets to 3






// Task 5 - Employee Information

let employee = {                            // Original employee object with three properties: Name, position, and salary
    name: "Alice", 
    position: "Manager", 
    salary: 75000
};

for (let property in employee) {                            //  for...in statement to list out each property of the employee objects
    console.log(`${property}: ${employee[property]}`)       // Final output of the employee
}






// Task 6 - Product Listings

const products = ["Apples", "Bananas", "Oranges"];          // Original product listing

for (const product of products) {                           // for...of loop which list out each product
    console.log(`Product: ${product}`)                      // Final Output
};






// Task 7 - Order Processing

const orders = [200, 201, 202];                     // OrderID numbers for the original output

orders.forEach(orderID => {                         // foreach loop which logs each orderID number
    console.log(`OrderIDs: ${orderID}`)             // Final Output
});






// Task 8 - Tax Calculation

function calculateTax(amount, taxrate) {                // Original function for calculating taxrate
    return amount * taxrate;                            // Final Output
};


const amount = 300;                                     // The set amount
const taxrate = 0.20;                                   // The set taxrate
const tax = calculateTax(amount, taxrate);              // The formula for calculating taxes of the set amount

console.log(`The tax on $${amount} at a ${taxrate * 100}% tax rate is $${tax}.`);           // Final Output'






// Task 9 - Discount Application

const applydiscount = function(price, discountPercentage) {             // The discount function to return a discounted price
    const dicsount = price * (discountPercentage / 100);
    const discountPrice = price - dicsount;
    return discountPrice;
};

const price = 500                                                        // Set price
const discountPercentage = 15;                                           // Set discount percentage   
const discountPrice = applydiscount(price, discountPercentage);          // Incorprating the function to return the discount price

console.log (`The total after the ${discountPercentage}% off coupon is $${discountPrice}`);         // Final Output






// Task 10 - Loyalty Points

const calculatePoints = (purchaseamount) => {                           // Formula to calculate the points from transactions
    return (purchaseamount / 10);
};

var purchaseamount = 200;                                               // Original set amount using var because my Task 1 had a "purchaseamount" variable already
const points = calculatePoints (purchaseamount);                        // Calculating how much points to give

console.log(`For this $${purchaseamount} transaction, you earned ${points} points.`)            // Final Output