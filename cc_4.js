// Task 1 - Customer Discounts

let purchaseamount = 150;       // Starting price for the product

let finalamount;                // Setting up the ifelse condition if amount exceeds $100

if (purchaseamount > 100) {
    finalamount = purchaseamount * 0.85
} else {
    finalamount = purchaseamount
}

console.log(`Grand Total after applicable discount: $${finalamount}`);      // Final output after applicable discounts