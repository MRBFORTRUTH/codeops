const {
  subtotal,
  discountBy,
  withVat,
  toETB,
  makeReceiptMaker,
} = require('./order.js');


const makeReceipt = makeReceiptMaker();
console.log(makeReceipt('Alice', 120, 200, 80));    
console.log(makeReceipt('Bob', 50, 60, 30, 40));    
console.log(makeReceipt('Charlie', 250, 150));      
console.log(makeReceipt('Diana', 100, 100, 100));   
console.log(makeReceipt('Eve', 75, 25));            