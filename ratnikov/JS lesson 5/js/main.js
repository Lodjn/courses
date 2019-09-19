// №1
function changeText1() {
    document.getElementById('button1').innerText = 'Привет'
}
// №2
function changeText2() {
    document.getElementById('button2').innerHTML = '<h3>Hello</h3>'
}
// №3
function changeText3() {
    var button3 = document.getElementById('button3'),
        ulElem = button3.parentNode.children[1];
    for( var key in ulElem.children) {
        ulElem.children[key].innerText = key
    }
}
// №4
function calculate(operation) {
    var inp1 = document.getElementById('inp1').value,
        inp2 = document.getElementById('inp2').value,
        res = 0,
        symbol='';
    switch(operation) {
        case '+': {
            res = Number(inp1) + Number(inp2);
            symbol = '+';
            break;
        }
        case '-': {
            res = Number(inp1) - Number(inp2);
            symbol = '-';
            break;
        }
        case '*': {
            res = Number(inp1) * Number(inp2);
            symbol = '*';
            break;
        }
        case '/': {
            res = Number(inp1) / Number(inp2);
            symbol = '/';
            break;
        }
    }
    document.getElementById('res').innerText = res;
    document.getElementById('symbol')
}