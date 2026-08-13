export const withVat = (amount, rate = 0.15) => {
    return amount + (amount * rate);
};

export const format = (amount) => {
    return `${amount.toFixed(2)} ETB`;
};

export const calculateTotal = (items = []) => {
    return items.reduce((sum, { price, qty }) => sum + (price * qty), 0);
};
