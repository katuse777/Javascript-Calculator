
//This section is for the function that run the four basic operations of Math
function add(a, b) {
    return a + b;
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

function operate(opp, a, b) {
    if (opp === ' x ') {
        return multiply(a, b);
    } else if (opp === '/') {
        return divide(a, b);
    } else if (opp === ' + ') {
        return add(a, b);
    } else if (opp === ' - ') {
        return subtract(a, b);
    }

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
const pointButton = document.getElementById('point');
const buttonsDisplay = document.getElementById('buttons');
//The end of the section above

//The section below is filled with code for when the buttons are clicked they'll call the onScreen() function 
// the number or operation they represent will be dispayed onScreen 
const numbersArr = [];
const oppArr = [];
let firstValue;


const returnedValue = function (num) {
    answerDisplay.textContent += num;
    setUp.textContent += num;
}



onButton.addEventListener('click', () => {
    answerDisplay.textContent = '';
})
button0.addEventListener('click', () => {
    returnedValue(0);
});
button1.addEventListener('click', () => {
    returnedValue(1);
});
button2.addEventListener('click', () => {
    returnedValue(2);
});
button3.addEventListener('click', () => {
    returnedValue(3);
});
button4.addEventListener('click', () => {
    returnedValue(4);
});
button5.addEventListener('click', () => {
    returnedValue(5);
});
button6.addEventListener('click', () => {
    returnedValue(6);
});
button7.addEventListener('click', () => {
    returnedValue(7);
});
button8.addEventListener('click', () => {
    returnedValue(8);
});
button9.addEventListener('click', () => {
    returnedValue(9);
});
pointButton.addEventListener('click', () => {
    returnedValue('.');
    pointButton.remove();
})
//The end of the section above

//The section below contains code that when the operation buttons are pressed, the firstValue and operation are displatyed in their
//own paragraph element 
const operation = function (opp) {
    buttonsDisplay.append(pointButton);
    firstValue = answerDisplay.textContent;
    numbersArr.push(firstValue);
    oppArr.push(opp);
    console.log(oppArr);
    if (numbersArr.length === 2) {
        setUp.textContent += opp;
        answerDisplay.textContent = '';
        let value1 = Number(numbersArr.shift());
        let value2 = Number(numbersArr.shift());
        const oppArrItem = oppArr.shift();
        console.log(oppArr);
        if(value1 === 0 && value2 === 0 && oppArrItem === '/') {
            answerDisplay.textContent = 'No!';
            return;
        }
        numbersArr.unshift(operate(oppArrItem, value1, value2));
        console.log(numbersArr);
        return;
    }
    console.log(numbersArr);
    setUp.textContent += opp;
    answerDisplay.textContent = '';
    return opp;
}


equalButton.addEventListener('click', () => {
    firstValue = numbersArr.shift();
    firstValue = Number(firstValue);
    console.log(firstValue);
    let secondValue = answerDisplay.textContent;
    secondValue = Number(secondValue);
    console.log(secondValue);
    const chosenOpp = oppArr.shift();
    console.log(chosenOpp);
    if(firstValue === 0 && secondValue === 0 && chosenOpp === '/') {
        answerDisplay.textContent = 'No!';
        return;
    }
    answerDisplay.textContent = operate(chosenOpp, firstValue, secondValue);
    //console.log(answerDisplay.textContent);
})



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


clear.addEventListener('click', () => {
    setUp.textContent = '';
    answerDisplay.textContent = '';
    numbersArr = [];
    oppArr = [];

})