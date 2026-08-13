function createGreeter(greeting) {
  return function(name) {
    console.log(`${greeting}, ${name}!`);
  };
}
const sayHello = createGreeter("Hello");
const sayHola = createGreeter("Hola");

sayHello("Alice");
sayHola("Bob");   

function introduce(greeting, punctuation) {
  console.log(`${greeting}, I'm ${this.name}${punctuation}`);
}

const person = { name: "Alex" };
introduce.call(person, "Hello", "!"); 
function EachPrice(prices, action) {
for (const p of prices) {
action(p); 
}
}
EachPrice([1208, 8200, 1120], price => {
console.log(`${price} ETB`);
})
// default value when none passed
function deliveryFee(total, rate = 0.05) {
return total * rate;
}
deliveryFee(1000); // 50 (uses 0.05)
deliveryFee(1000, 0.10); // 100
// rest — collect many args into an array
function totalBill(...prices) {
let sum = 0;
for (const p of prices) sum += p;
return sum;
}
totalBill(120, 200, 160); // 480
const vat = function (n) { return n * 0.15; };
// arrow — same thing, shorter
const vat = (n) => { return n * 0.15; };
// one expression → implicit return
const vat = n => n * 0.15;
vat(480); // 72
function makeGreeter(city) {
// inner function "closes over" city
return function (name) {
return `Selam ${name}, from ${city}`;
};
}
const addis = makeGreeter("Addis Ababa");
addis("Almaz"); // "Selam Almaz, from..."
