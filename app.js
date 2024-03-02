
let Rnum = Math.random()*10;
let num = Math.round(Rnum);


function readData(){
    const userInput = document.getElementById("userInput");

    if (userInput > Rnum) {
        console.log("Your input is greater than Random number.");
    } else if (userInput < Rnum) {
        console.log("Your input is less than Random number");
    }else if (userInput == Rnum) {
        console.log("Congratulations,Your answer is correct");
    } 
}