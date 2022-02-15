
let num1 = "";
let num2 = "";
let op = "";
function calculate(){
    let dly = document.querySelector("#display");
    let result = 0;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if(op == "+"){
        result = num1 + num2;
    }else if(op == "-"){
        result = num1 - num2;
    }else if(op == "*"){
        result = num1 * num2;
    }else if(op == "/"){
        result = num1 / num2;
    }
    num1=result;
    op="";
    dly.innerText = result;
}
function press(btn) {
    let dly = document.querySelector("#display");
    num1+=btn;
    dly.innerHTML=num1;
}
function clr() {
    let dly = document.querySelector("#display");
    dly.innerText = 0;
    num1="";
    num2="";
    op=""
}
function setOP(op1) {
    op=op1;
    num2=num1;
    num1="";
}