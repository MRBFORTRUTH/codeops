import orders from './orders.js';
import { withVat, format, calculateTotal } from './pricing.js';

const ordersWithTotal = orders.map(order => {
    const rawTotal = calculateTotal(order.items);
    const totalWithVat = withVat(rawTotal);

    return {
        ...order,
        total: totalWithVat
    };
});

const filteredOrders = ordersWithTotal.filter(order => order.total > 500);

const grandTotal = filteredOrders.reduce((sum, order) => sum + order.total, 0);

console.log("=== ADDIS MARKET ORDER SUMMARY ===");
console.log("Orders over 500 ETB:\n");

filteredOrders.forEach(({ id, customer, total }) => {
    console.log(`Order ID : ${id}`);
    console.log(`Customer : ${customer}`);
    console.log(`Total    : ${format(total)}`);
    console.log("---------------------------------");
});

console.log(`GRAND TOTAL: ${format(grandTotal)}`);