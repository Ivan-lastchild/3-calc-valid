let main = function(takeAction, firstNum, secondNum) {
    
    takeAction = validAction();
    firstNum = getNum('1');
    secondNum = getNum('2');


    if(takeAction == "+") {
        showResult(sum(firstNum, secondNum), firstNum, secondNum, takeAction);
    } else if (takeAction == "-") {
        showResult(sub(firstNum, secondNum), firstNum, secondNum, takeAction);
    } else if (takeAction == "*") {
        showResult(mult(firstNum, secondNum), firstNum, secondNum, takeAction);
    } else if(takeAction == "/"){
        showResult(div(firstNum, secondNum), firstNum, secondNum, takeAction);
    } else {
        console.log("выберите действие среди +,-,*,/");
    }
};

main();


function validAction(){
    let action;

    do {
        action = prompt ("Введите действие");
    } while (!(action =="+" || action =="-" || action =="*" || action == "/"));

    return action;
}

function getNum(nameOfVariable){
    let num = +prompt(`Введите число ${nameOfVariable}`);

    if (isNaN(num) != false){

        do {
            num = +prompt(`Введите число ${nameOfVariable}`);
        } while (isNaN(num) != false);

        return num;
        
    } else{

        return num;

    }
    
}


function showResult(fun, a, b, c){
    console.log(`${a} ${c} ${b} = ${fun}`);
}

function sum (a, b){
    return a + b;
}

function sub (a, b){
    return a - b ;
}

function mult (a, b){
    return a * b;
}

function div (a, b){
    return a / b;
}