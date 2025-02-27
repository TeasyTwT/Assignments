/*write a function that takes a list and returns the average of that list, add them all together and then divide by whatever in our case 12*/
let numbers_list1 = [3, 5, 2, 5, 100, 452, 63, -1, -552, 13, 7423, 441];
let numbers_list2 = [-5, -4, -78, -657];
let numbers_list3 = [421, -4, 214, -657];

let aNum = 0;
let anoNum = 0;

function Average(x) {
  for (let i = 0; i < x.length; i++) {
    aNum += x[i];
    //return aNum /= numbers_list.length;
  }
  return (aNum /= x.length);
  //return aNum;
}

console.log(Average(numbers_list1));
console.log(Average(numbers_list2));
console.log(Average(numbers_list3));

function highestintheroom(x) {
  let total = x[0];
  for (let i = 0; i < x.length; i++) {
    let high = x[i];
    if (high > total) {
      total = high;
    }
  }
  return total;
}

console.log(highestintheroom(numbers_list1));
console.log(highestintheroom(numbers_list2));
console.log(highestintheroom(numbers_list3));

function biggestNumberInArray(x) {
  // The largest number at first should be the first element or null for empty array
  var largest = x[0] || null;

  // Current number, handled by the loop
  var number = null;
  for (var i = 0; i < x.length; i++) {
    // Update current number
    number = x[i];

    // Compares stored largest number with current number, stores the largest one
    largest = Math.max(largest, number);
  }

  return largest;
}

console.log(biggestNumberInArray(numbers_list1));
console.log(biggestNumberInArray(numbers_list2));
console.log(biggestNumberInArray(numbers_list3));


function nSearch() {
  let key = 5;
  for (number of numbers_list1) {
    if (key === number) return true;
  }
  return false;
}

console.log(nSearch());


let employees = [
  { name: "Buymore. S", department: "Giftshop", salary: 35000 },
  { name: "Get Rich", department: "Ceo", salary: 120000 },
  { name: "Told U. So", department: "HR", salary: 65000 },
  { name: "Tattle Tail", department: "HR", salary: 65000 },
  { name: "Will B. Clean", department: "Janitor", salary: 45000 },
];

function salary(x) {
  let total = 0;
  for (let i = 0; i < x.length; i++) {
    total += x[i].salary;
  }
  return total;
}

console.log(salary(employees));

var totalsal = 0;
for (let x of employees) {
  totalsal += x.salary;
  console.log(totalsal);
}
