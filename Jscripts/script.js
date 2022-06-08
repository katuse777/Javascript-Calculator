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