// №1

var i = 2;

while (i<100) {
    let j=2;
    flag=true;
    while (j<i) {
        if(i%j == 0) {
            flag=false;
            break;  
        } else {
            j++;
        }
    }
    if(flag) {
        console.log(i);
    }
    i++;
}

// №2
i=0;
do {
    if(i==0) {
        console.log('0 - Это ноль')
    } else {
        if (i%2==0) {
            console.log(i + " - Это четное число");
        } else {
            console.log(i + " - Это нечетное число");
        }
    }
    i++;
} while (i<11)
// №3
for(i=0; i<10; console.log(i++)) {}
// №4
var outputString = "";
for(i=1; i<21; i++) {
    outputString += "x";
    console.log(outputString);
}