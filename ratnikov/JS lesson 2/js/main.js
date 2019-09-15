/* №1
var a = 1, b = 1, c, d;
c = ++a; alert(c); // 2
d = b++; alert(d); // 1
c = (2+ ++a); alert(c); // 5
d = (2+ b++); alert(d); // 4
alert(a); // 3
alert(b); // 3

 Данный код выдает такие результаты из-за особенностей приоритета выполнения операций
 Например в случае с=++а, мы сначала увеличиваем а, а затем присваиваем, а в случаем d=b++ наоборот сначала присваиваем, а потом увеличиваем*/

/* №2
var a = 2;
var x = 1 + (a *= 2);
a=4, x=5
*/
// №3
var a=0,
    b=0;
function operations(a,b) {
    if (a>0 && b>0) {
        return a-b;
    }
    if (a<0 && b<0) {
        return a*b;
    }
    if ((a>0 && b<0) || (a<0 && b>0)) {
        return a+b;
    }
}
// №4
function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
function numberOutput(start) {
    for (var i=start; i<16; i++) {
        console.log(i);
    }
}
a = randomInteger(0,15)
switch(a) {
    case 0: {
        numberOutput(0);
        break;
            }
    case 1: {
        numberOutput(1);
        break;
            }
    case 2: {
        numberOutput(2);
        break;
            }
    case 3: {
        numberOutput(3);
        break;
            }
    case 4: {
        numberOutput(4);
        break;
            }
    case 5: {
        numberOutput(5);
        break;
            }
    case 6: {
        numberOutput(6);
        break;
            }
    case 7: {
        numberOutput(7);
        break;
            }
    case 8: {
        numberOutput(8);
        break;
            }
    case 9: {
        numberOutput(9);
        break;
            }
    case 10: {
        numberOutput(10);
        break;
            }
    case 11: {
        numberOutput(11);
        break;
            }
    case 12: {
        numberOutput(12);
        break;
            }
    case 13: {
        numberOutput(13);
        break;
            }
    case 14: {
        numberOutput(14);
        break;
            }
    case 15: {
        numberOutput(15);
        break;
            }
}
// №5
function addition(arg1, arg2) {
    return arg1+arg2;
}
function subtraction(arg1, arg2) {
    return arg1-arg2;
}
function multiplication(arg1, arg2) {
    return arg1*arg2;
}
function division(arg1, arg2) {
    return arg1/arg2
}
// №6
function mathOperation(arg1, arg2, operation) {
    var result;
    switch(operation) {
        case "addition": {
            result = addition(arg1, arg2);
            break;
        }
        case "subtraction": {
            result = subtraction(arg1, arg2);
            break;
        }
        case "multiplication": {
            result = multiplication(arg1, arg2);
            break;
        }
        case "division": {
            result = division(arg1, arg2);
            break;
        }
        default : {
            result = 0;
            break;
        }
    }
    return result;
}
// №7
console.log(null == 0);
/* Такой результат обусловлен разными типами данных у null и 0. null это объект, а 0 число. Даже не смотря на возможность при сравнении частичного
 приведения данных к одному типу, мы не можем привести объект к числу и подобающе сравнить их*/

// №8
function power(x, n) {
    if (n == 1) {
      return x;
    } else {
      return x * power(x, n - 1);
    }
}