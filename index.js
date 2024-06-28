let num1 = "";
let num2 = "";
let operator = ""; 

function displayNumber(number){
    if (operator === ''){
        num1 += number;
        document.getElementById('x').innerHTML = num1;
    } else {
        num2 += number;
        document.getElementById('y').innerHTML = num2;
    }
}

function setOperator(op){
    operator = op;
    document.getElementById('operator_disp').innerText = (op === '*') ? 'x' : op;
}

function addition(num1, num2){
    return num1 + num2;
}
function subtraction(num1, num2){
    return num1 - num2;
}
function multiplication(num1, num2){
    return num1 * num2;
}
function division(num1, num2){
    return num1 / num2;
}

function operate(){
    let result;
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    switch(operator){
        case '+' :
            result = addition(number1, number2);
            break;
        case '-':
            result = subtraction(number1, number2);
            break;
        case '*':
            result = multiplication(number1, number2);
            break;
        case '/':
            result = division(number1, number2);
            break;
        default: 
            return;
    }

    document.getElementById('x').innerText = result;
    document.getElementById('operator_disp').innerText = '';
    document.getElementById('y').innerText = '';

    num1 = roundAccurately(result, 15).toString();
    num2 = '';
    operator = '';
}


function roundAccurately(num, places) {
    return parseFloat(Math.round(num + 'e' + places) + 'e-' + places);
}

function delNum(){
    if (num2 !== '') {
        num2 = num2.slice(0, -1);
        document.getElementById('y').innerText = num2;
    } else if (operator !== '') {
        operator = '';
        document.getElementById('operator_disp').innerText = '';
    } else {
        num1 = num1.slice(0, -1);
        document.getElementById('x').innerText = num1 || '0'; // Display '0' if num1 is empty
    }
}

function clearAll() {
    num1 = '';
    num2 = '';
    operator = '';
    document.getElementById('x').innerText = '0';
    document.getElementById('operator_disp').innerText = '';
    document.getElementById('y').innerText = '';
}