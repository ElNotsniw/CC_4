// Task 1 - Customer Discounts

let purchaseamount = 150;       // Starting price for the product

let finalamount;                // Setting up the ifelse condition if amount exceeds $100

if (purchaseamount > 100) {
    finalamount = purchaseamount * 0.85
} else {
    finalamount = purchaseamount
}

console.log(`Grand Total after applicable discount: $${finalamount}`);      // Final output after applicable discounts


// Task 2 - Sales Report

let sales = [50, 100, 150, 200, 250, 300]           // Original output to start calculating the total of these six values
let totalsales = 0                                  // Have to declare totalsales at 0 to then add up all the values from sales

for (let i = 0; i < sales.length; i++) {            // for loop to help add all the values together to get the totalsales
    totalsales += sales[i];
    
}

console.log(`Total Sales: $${totalsales}`)          // Final output after adding up all values