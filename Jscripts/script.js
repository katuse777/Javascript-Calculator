
//This section is for the function that run the four basic operations of Math
function add(a, b) {
    return a + b ;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}


//The end of the section above

//The section below a list of variables that store a reference to a button on the calculator or a paragraph element on it's screen
const display = document.getElementById('screen');
const onButton = document.getElementById('on');
const button0 = document.getElementById('0');
const button1 = document.getElementById('1');
const button2 = document.getElementById('2');
const button3 = document.getElementById('3');
const button4 = document.getElementById('4');
const button5 = document.getElementById('5');
const button6 = document.getElementById('6');
const button7 = document.getElementById('7');
const button8 = document.getElementById('8');
const button9 = document.getElementById('9');
const addButton = document.getElementById('add');
const minusButton = document.getElementById('minus');
const multiplyButton = document.getElementById('multi');
const divideButton = document.getElementById('divide');
const clear = document.getElementById('clear');
const operateButton = document.getElementById('operate');
const deleteButton = document.getElementById('delete');
const setUp = document.getElementById('set-up');
const answerDisplay = document.getElementById('answer');
const equalButton = document.getElementById('equal');
const operationDisplay = document.getElementById('operation');
const secondValueDisplay = document.getElementById('secondValue');
//The end of the section above

//The section below is filled with code for when the buttons are clicked they'll call the onScreen() function 
// the number or operation they represent will be dispayed onScreen 
function onScreen(num) {
    answerDisplay.textContent += num;
}

onButton.addEventListener('click', () => {
    answerDisplay.textContent = '';
})
button0.addEventListener('click', () => {
    onScreen(0);
});
button1.addEventListener('click', () => {
    onScreen(1);
});
button2.addEventListener('click', () => {
    onScreen(2);
});
button3.addEventListener('click', () => {
    onScreen(3);
});
button4.addEventListener('click', () => {
    onScreen(4);
});
button5.addEventListener('click', () => {
    onScreen(5);
});
button6.addEventListener('click', () => {
    onScreen(6);
});
button7.addEventListener('click', () => {
    onScreen(7);
});
button8.addEventListener('click', () => {
    onScreen(8);
});
button9.addEventListener('click', () => {
    onScreen(9);
});
//The end of the section above

 //The section below contains code that when the operation buttons are pressed, the firstValue and operation are displatyed in their
 //own paragraph element 
function operation(opp) {
    
} 

addButton.addEventListener('click', () => {
    operation(' + ');
})
minusButton.addEventListener('click', () => {
    operation(' - ');
})
multiplyButton.addEventListener('click', () => {
    operation(' x ');
})
divideButton.addEventListener('click', () => {
    operation('/');
})
//The end of the section above

function equalCall() {
    
}

equalButton.addEventListener('click', () => {
    equalCall();
})

clear.addEventListener('click', () => {
    
})