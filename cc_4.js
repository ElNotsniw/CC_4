// Task 1 - Customer Discounts

let purchaseamount = 150;       // Starting price for the product

let finalamount;                // Setting up the ifelse condition if amount exceeds $100

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