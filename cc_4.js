// Task 1 - Customer Discounts

let purchaseamount = 150;       // Starting price for the product

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

const products = ["Apples", "Bananas", "Oranges"];

for (const product of products) {
    console.log(`Product: ${product}`)
};




// Task 7 - Order Processing

const orders = [200, 201, 202];

orders.forEach(orderID => {
    console.log(`OrderIDs: ${orderID}`)    
});