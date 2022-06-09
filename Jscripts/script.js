 function add(a, b) {
     return a + b;
 }

 function subtract(a, b) {
     return a - b;
 }

 function multiply(a, b) {
     return a*b;
 }

 function divide(a, b) {
     return a/b;
 }

 function random() {
     return Math.floor(Math.random()*4);
}

 function operate(a, b) {
     const randomNumber = random();
     
     switch(randomNumber) {
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

 function onScreen() {
     
 }