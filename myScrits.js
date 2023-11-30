function add (num1, num2){
    result = 0;

    result = num1 + num2;

    return result;
}

function subtract (num1, num2){
    result = 0;

    result = num1 - num2;

    return result;
}

function multiply (num1, num2){
    result = 0;

    result = num1 * num2;

    return result;
}

function divide (num1, num2){
    result = 0;

    result = num1 / num2;

    return result;
}

function operate (num1, operator, num2){
    var result = 0;

    if (operator == "+"){
        result = num1 + num2;
    } else if (operator == "-"){
        result = num1 - num2;
    } else if (operator == "*"){
        result = num1 * num2;
    } else if (operator == "/"){
        result = num1 / num2;
    }

    return result;
}

let button1 = document.getElementById("1");
let button2 = document.getElementById("2");
let button3 = document.getElementById("3");
let button4 = document.getElementById("4");
let button5 = document.getElementById("5");
let button6 = document.getElementById("6");
let button7 = document.getElementById("7");
let button8 = document.getElementById("8");
let button9 = document.getElementById("9");
let button0 = document.getElementById("0");
let buttonAdd = document.getElementById("add");
let buttonEqual = document.getElementById("equal");
let buttonDot = document.getElementById("dot");
let resultVisor = document.getElementById("visor")
let operation = [];
let num1 = "";
let operator = "";
let num2 = "";

button1.addEventListener("click", function(){

    while(operator == ""){
        num1 += "1";
        resultVisor.textContent = num1;
    }

    resultVisor.textContent = num2;

});
button2.addEventListener("click", function(){

    if(operator == ""){
        num1 += "2";
    }
    resultVisor.textContent = num1;
    resultVisor.textContent = num2;

});
button2.addEventListener("click", function(){

    if(operator == ""){
        num1 += "2";
    }
    resultVisor.textContent = num1;
    resultVisor.textContent = num2;

});
button3.addEventListener("click", function(){

    if(operator == ""){
        num1 += "3";
    }
    resultVisor.textContent = num1;
    resultVisor.textContent = num2;

});
button4.addEventListener("click", function(){

    if(operator == ""){
        num1 += "4";
    }
    resultVisor.textContent = num1;
    resultVisor.textContent = num2;

});
button5.addEventListener("click", function(){

    if(operator == ""){
        num1 += "5";
    }
    resultVisor.textContent = num1;
    resultVisor.textContent = num2;

});
button6.addEventListener("click", function(){

    if(operator == ""){
        num1 += "6";
    }
    resultVisor.textContent = num1;
    resultVisor.textContent = num2;

});
button7.addEventListener("click", function(){

    if(operator == ""){
        num1 += "7";
    }
    resultVisor.textContent = num1;
    resultVisor.textContent = num2;

});
button8.addEventListener("click", function(){

    if(operator == ""){
        num1 += "8";
    }
    resultVisor.textContent = num1;
    resultVisor.textContent = num2;

});
button9.addEventListener("click", function(){

    if(operator == ""){
        num1 += "9";
    }
    resultVisor.textContent = num1;
    resultVisor.textContent = num2;

});
button0.addEventListener("click", function(){

    if(operator == ""){
        num1 += "0";
    }
    resultVisor.textContent = num1;
    resultVisor.textContent = num2;

});
buttonAdd.addEventListener("click", function(){

    operation.push(num1);
    resultVisor.textContent = " ";
    operator = "+";

});

/*num1 = parseInt(prompt("Num1:"));
operator = prompt("Operator:");
num2 = parseInt(prompt("Num2:"));

alert(operate(num1,operator,num2));*/