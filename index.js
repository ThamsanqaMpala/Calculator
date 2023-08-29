let operatonsCount = 0;
let total = 0;
let number = 0;
let operation = '';
let previousOperation = '';

const displayTotal = document.getElementById(display)
function addObject(operation, number){
    number = parseFloat(number);
    operatonsCount++;
    console.log(`Number is ${number}`);
    console.log(`Operation count is ${operatonsCount}`);
    if (operation === '+') {
        total = total + number;
        //total += number;
    }
    else if(operation === '-') {
        if (total === 0) {
            total = number;
        }else{
            total = total - number;
        }
    }
    else if(operation === '/'){
        if(total === 0){
            total = number;
        }else{
            total = total / number;
        }
    }
    else if(operation === '*'){
        if (total === 0) {
            total = number
        }else{
            total = total * number;
        }
    }
    
    previousOperation = operation;
    
}

function totalTotal(e, number){
    number = parseFloat(number);
    operatonsCount++;
    console.log(`Number is ${number}`);
    console.log(`Operation count is ${operatonsCount}`);
    if (previousOperation === '+') {
        total = total + number;
        //total += number;
    }
    else if(previousOperation === '-') {
        if (total === 0) {
            total = number;
        }else{
            total = total - number;
        }
    }
    else if(previousOperation === '/'){
        if(total === 0){
            total = number;
        }else{
            total = total / number;
        }
    }
    else if(previousOperation === '*'){
        if (total === 0) {
            total = number
        }else{
            total = total * number;
        }
    }

    console.log(`Total is ${total}`);
    displayTotal.textcontent = total;
    return;
}