const sumAll = function(num1, num2) {
let cont=0;
let aux=0;
let div1=0;
let div2=0

div1 = num1 % 1;
div2 = num2 % 1;

let checkNumber1= isNaN(num1);
let checkNumber2=isNaN(num2);

if(num1 > num2){
    aux = num2;
    num2 = num1;
    num1 = aux;
 }
 if (num1 < 0 || num2 < 0 || div1 != 0 || div2 != 0 || checkNumber1 != "false" || checkNumber2 != "false") {
    cont="ERROR";    
 } else {

    for(let i=num1; i <=num2; i++){
        cont+=i;
    }
 }
 return cont;
    
};

// Do not edit below this line
module.exports = sumAll;
