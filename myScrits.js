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
    num1 = parseInt(num1);
    num2 = parseInt(num2);

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
let buttonSubtract = document.getElementById("subtract");
let buttonMultiply = document.getElementById("multiply");
let buttonDivide = document.getElementById("divide");
let buttonEqual = document.getElementById("equal");
let buttonDot = document.getElementById("dot");
let resultVisor = document.getElementById("visor");
let buttonClear = document.getElementById("clear");
let operation = [];
let auxResult = "";
let num1 = "";
let operator = "";
let num2 = "";

button1.addEventListener("click", function(){

    if(auxResult != ""){
        num2 += 1;
        resultVisor.textContent = num2;
    }else{
        if(operator == ""){
            num1 += 1;
            resultVisor.textContent = num1;
        }else{
            num2 += 1;
            resultVisor.textContent = num2;
        } 
    }  

});
button2.addEventListener("click", function(){

    if(auxResult != ""){
        num2 += 2;
        resultVisor.textContent = num2;
    }else{
        if(operator == ""){
            num1 += 2;
            resultVisor.textContent = num1;
        }else{
            num2 += 2;
            resultVisor.textContent = num2;
        } 
    } 

});
button3.addEventListener("click", function(){

    if(auxResult != ""){
        num2 += 3;
        resultVisor.textContent = num2;
    }else{
        if(operator == ""){
            num1 += 3;
            resultVisor.textContent = num1;
        }else{
            num2 += 3;
            resultVisor.textContent = num2;
        } 
    }  

});
button4.addEventListener("click", function(){

    if(auxResult != ""){
        num2 += 4;
        resultVisor.textContent = num2;
    }else{
        if(operator == ""){
            num1 += 4;
            resultVisor.textContent = num1;
        }else{
            num2 += 4;
            resultVisor.textContent = num2;
        } 
    }   

});
button5.addEventListener("click", function(){

    if(auxResult != ""){
        num2 += 5;
        resultVisor.textContent = num2;
    }else{
        if(operator == ""){
            num1 += 5;
            resultVisor.textContent = num1;
        }else{
            num2 += 5;
            resultVisor.textContent = num2;
        } 
    }   

});
button6.addEventListener("click", function(){

    if(auxResult != ""){
        num2 += 6;
        resultVisor.textContent = num2;
    }else{
        if(operator == ""){
            num1 += 6;
            resultVisor.textContent = num1;
        }else{
            num2 += 6;
            resultVisor.textContent = num2;
        } 
    }  

});
button7.addEventListener("click", function(){

    if(auxResult != ""){
        num2 += 7;
        resultVisor.textContent = num2;
    }else{
        if(operator == ""){
            num1 += 7;
            resultVisor.textContent = num1;
        }else{
            num2 += 7;
            resultVisor.textContent = num2;
        } 
    }    

});
button8.addEventListener("click", function(){

    if(auxResult != ""){
        num2 += 8;
        resultVisor.textContent = num2;
    }else{
        if(operator == ""){
            num1 += 8;
            resultVisor.textContent = num1;
        }else{
            num2 += 8;
            resultVisor.textContent = num2;
        } 
    }

});
button9.addEventListener("click", function(){

    if(auxResult != ""){
        num2 += 9;
        resultVisor.textContent = num2;
    }else{
        if(operator == ""){
            num1 += 9;
            resultVisor.textContent = num1;
        }else{
            num2 += 9;
            resultVisor.textContent = num2;
        } 
    }
});
button0.addEventListener("click", function(){

    if(auxResult != ""){
        num2 += 0;
        resultVisor.textContent = num2;
    }else{
        if(operator == ""){
            num1 += 0;
            resultVisor.textContent = num1;
        }else{
            num2 += 0;
            resultVisor.textContent = num2;
        } 
    }   

});
buttonAdd.addEventListener("click", function(){

    if(operator != ""){
        console.log("ADD !=");
        if(auxResult != "" && num2 != ""){
            console.log("auxResult+num2");
            console.log("auxResult:"+auxResult);
            auxResult = operate(auxResult, operator, num2);
            resultVisor.textContent = auxResult;
            console.log("num2:"+num2);
        }else if(num2 != ""){
            auxResult = operate(num1, operator, num2);
            console.log("num1+num2");
            resultVisor.textContent = auxResult;
        }else{
            resultVisor.textContent = auxResult;
        }
        num1 = "";
        num2 = "";
        operator = "+"
        
    }else{
        console.log("else");
        console.log(auxResult);
        console.log(operator);
        operator = "+";
        resultVisor.textContent = operator;
    }
});
buttonSubtract.addEventListener("click", function(){

    if(operator != ""){
        console.log("ADD !=");
        if(auxResult != "" && num2 != ""){
            console.log("auxResult+num2");
            console.log("auxResult:"+auxResult);
            auxResult = operate(auxResult, operator, num2);
            resultVisor.textContent = auxResult;
            console.log("num2:"+num2);
        }else if(num2 != ""){
            auxResult = operate(num1, operator, num2);
            console.log("num1+num2");
            resultVisor.textContent = auxResult;
        }else{
            resultVisor.textContent = auxResult;
        }
        num1 = "";
        num2 = "";
        operator = "-"
        
    }else{
        console.log("else");
        console.log(auxResult);
        console.log(operator);
        operator = "-";
        resultVisor.textContent = operator;
    }

});
buttonDivide.addEventListener("click", function(){

    if(operator != ""){
        console.log("ADD !=");
        if(auxResult != "" && num2 != ""){
            console.log("auxResult+num2");
            console.log("auxResult:"+auxResult);
            auxResult = operate(auxResult, operator, num2);
            resultVisor.textContent = auxResult;
            console.log("num2:"+num2);
        }else if(num2 != ""){
            auxResult = operate(num1, operator, num2);
            console.log("num1+num2");
            resultVisor.textContent = auxResult;
        }else{
            resultVisor.textContent = auxResult;
        }
        num1 = "";
        num2 = "";
        operator = "/"
        
    }else{
        console.log("else");
        console.log(auxResult);
        console.log(operator);
        operator = "/";
        resultVisor.textContent = operator;
    }

});
buttonMultiply.addEventListener("click", function(){

    if(operator != ""){
        console.log("ADD !=");
        if(auxResult != "" && num2 != ""){
            console.log("auxResult+num2");
            console.log("auxResult:"+auxResult);
            auxResult = operate(auxResult, operator, num2);
            resultVisor.textContent = auxResult;
            console.log("num2:"+num2);
        }else if(num2 != ""){
            auxResult = operate(num1, operator, num2);
            console.log("num1+num2");
            resultVisor.textContent = auxResult;
        }else{
            resultVisor.textContent = auxResult;
        }
        num1 = "";
        num2 = "";
        operator = "*"
        
    }else{
        console.log("else");
        console.log(auxResult);
        console.log(operator);
        operator = "*";
        resultVisor.textContent = operator;
    }

});
buttonEqual.addEventListener("click", function(){
    
    if(auxResult != ""){
        resultVisor.textContent = operate(auxResult, operator, num2)
    }else{
        resultVisor.textContent = operate(num1, operator, num2);
    }
    num1 = "";
    num2 = "";
    auxResult = "";
    operator = "";
});

buttonClear.addEventListener("click", function(){
    num1 = "";
    num2 = "";
    auxResult = "";
    operator = "";
    resultVisor.textContent = "Cleared";
});
/*num1 = parseInt(prompt("Num1:"));
operator = prompt("Operator:");
num2 = parseInt(prompt("Num2:"));

alert(operate(num1,operator,num2));*/