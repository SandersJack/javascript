function add(num1, num2) {
    return num1+num2;
}

function subtract(num1, num2) {
    return num1-num2;
}

function multi(num1, num2) {
    return num1*num2;
}

function divide(num1, num2) {
    return num1/num2;
}

function operate(op,num1,num2) {
    let result;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    if (op =='+') result = add(num1,num2);
    if (op =='-') result = subtract(num1,num2);
    if (op =='x') result = multi(num1,num2);
    if (op =='/') result = divide(num1,num2);
    console.log(result)
    return result;
}

function stringContainsNumber(_string) {
    return /\d/.test(_string);
  }

function init() {
    const container = document.querySelector('#container');
    const text = ['','','','C','1','2','3','+','4','5','6','-','7','8','9','x','.','0','=','/'];
    for (let i=0; i<20; i++) {
        const pix = document.createElement('button');
        pix.setAttribute('id',text[i]);
        pix.setAttribute('class', 'pixel')
        pix.textContent = text[i];
        container.appendChild(pix)
        }
}

init();

const buttons = document.querySelectorAll('.pixel');
const display = document.querySelector('#screen');

let input = [];
let num1 = '';
let num2 = '';
let op = 'op';
let equal = 0;

buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        let id = button.id;
        if (id == 'C') {
            input = [];
            display.textContent = '';
            equal = 0;
            num1 = '';
            num2 = '';
            op = 'op';
        } else {
            input.push(id);
        }
        console.log(input);
        
        if (id == '=') {
            for (let i =0 ; i<input.length; i++) {
                if (stringContainsNumber(input[i]) && op =='op' && equal == 0) {
                    num1 += input[i];
                } 
                if (input[i] == '+' || input[i] == 'x' || input[i] == '/' || input[i] == '-') {
                    op = input[i];
                }
                if (stringContainsNumber(input[i]) && op !='op') {
                    num2 += input[i];
                }
                if (input[i] == '=') {
                    console.log(num1)
                    console.log(num2)
                    let result = operate(op,num1,num2);
                    input = [result];
                    num1 = result.toString();
                    num2 = '';
                    equal = 1;
                    op = 'op';
                }
            }
        }
        let dinput = input.join('')
        display.textContent = dinput;
    });
  });
