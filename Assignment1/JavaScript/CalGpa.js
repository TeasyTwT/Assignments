let MaxNum = 6;
let MinNum = 1;
let Diceroll;
let count = 0
do {
    Diceroll = Math.floor(Math.random() * MaxNum) + MinNum;
    count++
    console.log("Roll " + count + " " + Diceroll); 
  } while (Diceroll !== MaxNum);
  
  console.log("final roll count = " + count)

