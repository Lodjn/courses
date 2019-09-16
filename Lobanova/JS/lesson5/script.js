window.onload = function() {}

function changeText() {
    let list = document.querySelectorAll('.list li');
    for (let i = 0; i < list.length; i++) {
        list[i].innerText = i;
    }
}

function calc(calc_oper) {
    let num1 = (document.getElementById('num1').value),
        num2 = (document.getElementById('num2').value),
        res = 0,
        oper = calc_oper;
    if (isNaN(num1) || isNaN(num2) || !num1 || !num2) {
        res = 'Введите числовые данные для вычисления';
    } else {
        num1 = +((document.getElementById('num1').value));
        num2 = +((document.getElementById('num2').value));
        switch (oper) {
            case '1':
                res = num1 + num2;
                break;
            case '2':
                res = num1 - num2;
                break;
            case '3':
                res = num1 * num2;
                break;
            case '4':
                res = (num2 === 0) ? 'Деление на 0 невозможно!' : num1 / num2;
                break;
        }

    }
    document.getElementById('res').innerText = res;
}

function addItem() {
    let li = document.createElement('li');
    li.innerText = 'Первый элемент списка';
    document.getElementById('menu').insertBefore(li, document.getElementById('menu').children[0]);
}

function drawChess() {
    let n = 8,
        boardTable = document.getElementById('chess');
    for (let i = 0; i < n; i++) {
        var rowElement = document.createElement('tr');
        for (let j = 0; j < n; j++) {
            let cell = document.createElement('td');
            rowElement.appendChild(cell);
        }
        boardTable.appendChild(rowElement);
    }
}