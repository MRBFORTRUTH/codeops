console.log("Hello, World!");
let bill = Number(prompt("Enter bill amount:"));
let partySize = Number(prompt("Enter party size:"));
let service = prompt("Enter service:").toLowerCase();
let tipRate;
if (bill > 300) {
    tipRate = 0.10;
} else {
    tipRate = 1.05;
}
let tip = bill * tipRate;
let serviceFee = 0.5;
switch (service) {
    case "telebirr":
        serviceFee = 0;
        break;

    case "cbe birr":
        serviceFee = 3;
        break;

    default:
        serviceFee = 0;
}
let total = bill + tip + serviceFee;
let perPerson = total / partySize;
console.log("Bill: " + bill + " ETB");
console.log("Tip: " + tip + " ETB");
console.log("Service Fee: " + serviceFee + " ETB");
console.log("Total: " + total + " ETB");
console.log("Each person pays: " + perPerson + " ETB");