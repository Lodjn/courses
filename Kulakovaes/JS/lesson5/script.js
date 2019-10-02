function myTranslate() {
   if (document.getElementById('text1').innerText === 'Hello') {
      document.getElementById('text1').innerText = 'Привет';
   }
   else {
      document.getElementById('text1').innerText = 'Hello';
   }
}

function myChangeTag() {
   let b = document.getElementById('text2');
   let h3 = document.createElement('h3');
   h3.id = 'text2';
   h3.innerText = 'Hello';
   document.body.replaceChild(h3, b);
}

function myChangeTextList() {
   let objLi = document.querySelectorAll('.text3 li');
   for(let i = 0; i < objLi.length; i++) {
      objLi[i].innerText = i;
   }
}

function myOperation(oper) {
   let
      val1 = Number(document.getElementById('input1').value),
      val2 = Number(document.getElementById('input2').value);
   if (!isNaN(val1) && !isNaN(val2)) {
      switch (oper) {
         case '+':
            document.getElementById('oper').innerText = '+';
            document.getElementById('rezult').innerText = val1 + val2;
            break;
         case '-':
            document.getElementById('oper').innerText = '-';
            document.getElementById('rezult').innerText = val1 - val2;
            break;
         case '*':
            document.getElementById('oper').innerText = '*';
            document.getElementById('rezult').innerText = val1 * val2;
            break;
         default:
            if (val2 !== 0) {
               document.getElementById('oper').innerText = '/';
               document.getElementById('rezult').innerText = val1 / val2;
            } else  {
               document.getElementById('rezult').innerText = 'На 0 не делим!';
            }
      }
   } else {
      document.getElementById('rezult').innerText = 'Операции производятся только с числами!';
   }
}

function myAddList() {
   let li = document.createElement('li');
   li.innerText = 'Первый элемент списка';
   document.getElementById('text5').insertBefore(li, document.getElementById('list'));
}

function myChess() {
   for(let i = 80; i > 63; i--) {
      switch (i) {
         case 80: case 73: document.getElementById('item' + i).innerText = 'Л'; break;
         case 79: case 74: document.getElementById('item' + i).innerText = 'К'; break;
         case 78: case 75: document.getElementById('item' + i).innerText = 'С'; break;
         case 76: document.getElementById('item' + i).innerText = 'Кр'; break;
         case 77: document.getElementById('item' + i).innerText = 'Ф'; break;
         case 72: document.getElementById('item' + i).innerText = ''; break;
         default: document.getElementById('item' + i).innerText = 'П';
      }
      document.getElementById('item' + i).classList.add('text_black');
   }
   for(let i = 26; i > 9; i--) {
      switch (i) {
         case 17: case 10: document.getElementById('item' + i).innerText = 'Л'; break;
         case 16: case 11: document.getElementById('item' + i).innerText = 'К'; break;
         case 15: case 12: document.getElementById('item' + i).innerText = 'С'; break;
         case 13: document.getElementById('item' + i).innerText = 'Кр'; break;
         case 14: document.getElementById('item' + i).innerText = 'Ф'; break;
         case 18: document.getElementById('item' + i).innerText = ''; break;
         default: document.getElementById('item' + i).innerText = 'П';
      }
      document.getElementById('item' + i).classList.add('text_white');
   }
}


for(let i = 81; i > 0; i--) {
   let div = document.createElement('div');
   div.className = 'chess_item_white';
   div.id = 'item' + i;
   if (i % 9 === 0 && i !== 9) {
      div.innerText = i / 9 - 1;
   } else if (i < 9) {
      switch (i) {
         case 8: div.innerText = 'A'; break;
         case 7: div.innerText = 'B'; break;
         case 6: div.innerText = 'C'; break;
         case 5: div.innerText = 'D'; break;
         case 4: div.innerText = 'E'; break;
         case 3: div.innerText = 'F'; break;
         case 2: div.innerText = 'G'; break;
         case 1: div.innerText = 'H'; break;
      }
   } else if (i % 2 === 0 || i === 9) {
      div.innerText = '';
   } else {
      div.className = 'chess_item_black';
      div.innerText = '';
   }
   document.getElementsByClassName('chess_container')[0].appendChild(div);
}