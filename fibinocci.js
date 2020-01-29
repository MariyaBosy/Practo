
var number1= 0,number2= 1,sum = 1;
function fibonacci(n) {
   
    console.log(0);
    for(var i = 2; i <= n; i++) {
        console.log("," +number2);
       sum = number1+number2;
        number1= number2;
       number2= sum;
    }}fibonacci(7)
