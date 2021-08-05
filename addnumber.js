const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback){
    if(numsLeft === 0 ){
        reader.close();
        return completionCallback(sum);
    }
    let curnum;
    reader.question("What is your num?\n", function (num) {
        debugger
        console.log(`You enter is: ${num}!\n`);
        debugger
        curnum = parseInt(num);
        debugger
        sum += curnum;
        debugger
        console.log(`Now sum is: ${sum}\n`);
        addNumbers(sum, numsLeft - 1, completionCallback);  
    });
}

addNumbers(0, 4, sum => console.log(`Total Sum: ${sum}`));
