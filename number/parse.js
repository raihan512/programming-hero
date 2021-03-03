var a = 50;
var b = "100";
b = parseInt(b);
console.log((a+b));

b = parseFloat(b);
console.log((a+b));

// or it can be written by this way

var number1=200;
var number2 = "300";
number2 = +number2;
console.log(number2+number1);

var number1=200;
var number2 = "300.002";
number2 = parseFloat(number2);
console.log(number2+number1);