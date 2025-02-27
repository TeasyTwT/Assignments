/*const Groceryitems = [
  { name: "Apple", price: 1.65 },
  { name: "Banana", price: 0.31 },
  { name: "Orange", price: 2.64 },
  { name: "Cucumber", price: 2.99 },
  { name: "Tomato", price: 0.66 },
  { name: "Carrot", price: 4.99 },
  { name: "Beef Steak", price: 30.84 },
  { name: "Chicken Wing", price: 19.22 },
  { name: "Tuna", price: 20.64 },
  { name: "Chips", price: 4.99 },
  { name: "Cereal", price: 5.99 },
  { name: "Snacks", price: 8.99 },
];*/

const CheckoutList = document.getElementById("CheckoutList");
const totalElement = document.getElementById("Total");
let total = 0;

function Add2Cart(product, price) {
  const listItem = document.createElement("li");
  listItem.textContent = `${product} - $${price.toFixed(2)}`;
  CheckoutList.appendChild(listItem);
  total += price;
  totalElement.textContent = `Total: $${total.toFixed(2)}`;
}
