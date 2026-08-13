
function subtotal(...prices) {
  return prices.reduce((acc, price) => acc + price, 0);
}
function discountBy(rate) {
  return (amount) => amount * (1 - rate);
}
function withVat(amount) {
  return amount * 1.15;
}
function toETB(amount) {
  return amount.toFixed(2) + ' ETB';
}
function makeReceiptMaker() {
  let orderNumber = 0;

  return function (customerName, ...prices) {
    orderNumber += 1;
    const total = subtotal(...prices);
    const discount = discountBy(0.1);
    const afterDiscount = discount(total); 
    const withVatAmount = withVat(afterDiscount);
    const formattedAmount = toETB(withVatAmount);
    return `#${orderNumber}: ${formattedAmount}`;
  };
  
}

module.exports = {
  subtotal,
  discountBy,
  withVat,
  toETB,
  makeReceiptMaker,
};