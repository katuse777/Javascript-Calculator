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

function random() {
    return Math.floor(Math.random() * 4);
}

function operate(a, b) {
    const randomNumber = random();

    switch (randomNumber) {
        case 0:
            return add(a, b);
        case 1:
            return subtract(a, b);
        case 2:
            return multiply(a, b);
        case 3:
            return divide(a, b);

    }
}

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

onButton.addEventListener('click', () => {
    answerDisplay.textContent = '';
})

function onScreen(num) {
    answerDisplay.textContent += num;
}

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

function operation(opp) {
    const firstValue = Number(answerDisplay.textContent);
    setUp.textContent += firstValue;
    setUp.textContent += opp;
    answerDisplay.textContent = '';
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

