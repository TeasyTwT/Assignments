const GpaScale = { A: 100, B: 80, C: 70, D: 60, F: 0 };

let gpa1 = ["A", "B", "A", "c", "f"];
let gpa2 = ["A", "B", "a", "f", "C", "f", "A", "b", "b" , "c"
];


// googled solution to needing to normalize the list

function Conver(x) {
  let GpaNum = x.map((Gpa) => GpaScale[Gpa.toUpperCase()]);
  return GpaNum;
}

console.log(gpa1 + " Ok");
console.log(gpa2 + " Ok");

console.log(Conver(gpa1));
console.log(Conver(gpa2));

// off the internet (googled)

function CalAverage(x) {
  let GpaAv = Conver(x);
  let sum = GpaAv.reduce((acc, num) => acc + num, 0);
  return "Your GPA is " + sum / GpaAv.length;
}

// for loop 

function CalAverage2(x) {
  let GpaAv = Conver(x);
  let sum = 0;
  for (let num of GpaAv) {
    sum += num;
  }
  return `your GPA is ${sum / GpaAv.length}`; //(vs code updated this for me haha added the back ticks and '$')
}

console.log(CalAverage(gpa1));
console.log(CalAverage(gpa2));

console.log(CalAverage2(gpa1));
console.log(CalAverage2(gpa2));

/*function Calculate(){
    let txt = document.getElementById("Display");
    let Display = txt.value;
    document.write(txt)
}*/
