window.onload = function () {
   // tasks №1, №2
   function myShopDelProduct(event) {
      let
         divShopBasketItem = this.parentNode,
         basket = document.getElementById('id-shop-basket-item');
      basket.removeChild(divShopBasketItem);
   }

   function myShopAddProduct(event) {
      let
         shopItem = this.parentNode,
         shopImage = shopItem.getElementsByClassName('shop-image'),
         shopCost = shopItem.getElementsByClassName('shop-cost'),
         basket = document.getElementById('id-shop-basket-item'),
         divShopBasketItem = document.createElement('div'),
         spanName = document.createElement('span'),
         spanShopCostBasket = document.createElement('span'),
         shopBasketButton = document.createElement('div');

      spanName.innerText = shopImage[0].innerText;

      spanShopCostBasket.innerText = '(' + shopCost[0].innerText + ')'
      spanShopCostBasket.className = "shop-cost-basket";

      shopBasketButton.innerText = "✕";
      shopBasketButton.className = "shop-basket-button";
      shopBasketButton.addEventListener('click', myShopDelProduct);
      shopBasketButton.addEventListener('click', myShopCountCost);

      divShopBasketItem.appendChild(spanName);
      divShopBasketItem.appendChild(spanShopCostBasket);
      divShopBasketItem.appendChild(shopBasketButton);

      basket.appendChild(divShopBasketItem);
   }

   function myShopCountCost(event) {
      let
         shopCostBasket = document.getElementsByClassName('shop-cost-basket'),
         shopCostAll = document.getElementById('shop-cost-all'),
         sumCostAll = 0;
      for(let i = 0; i < shopCostBasket.length; i++) {
         let
            arrCost = shopCostBasket[i].innerText.split(' '),
            sumCost = Number(arrCost[0].substr(1));
         sumCostAll += sumCost;
      }
      if (sumCostAll === 0) {
         shopCostAll.innerText = 'корзина пустая';
         shopCostAll.className = 'shop-basket-empty';

      } else {
         shopCostAll.innerText = 'Сумма заказа: ' + sumCostAll + ' руб.';
         shopCostAll.className = 'shop-basket-noempty';
      }
   }

   function myShopBackPage(event) {
      let
         shopBasketItem = document.getElementById('id-shop-basket-item'),
         shopBasketAddress = document.getElementById('id-shop-basket-address'),
         shopBasketComment = document.getElementById('id-shop-basket-comment');
      if (shopBasketComment.classList.contains('div-block')) {
         shopBasketComment.classList.add('div-none');
         shopBasketComment.classList.remove('div-block');
         shopBasketAddress.classList.add('div-block');
         shopBasketAddress.classList.remove('div-none');
      } else if (shopBasketAddress.classList.contains('div-block')) {
         shopBasketAddress.classList.add('div-none');
         shopBasketAddress.classList.remove('div-block');
         shopBasketItem.classList.add('div-block');
         shopBasketItem.classList.remove('div-none');
      }
   }

   function myShopNextPage(event) {
      let
         shopBasketItem = document.getElementById('id-shop-basket-item'),
         shopBasketAddress = document.getElementById('id-shop-basket-address'),
         shopBasketComment = document.getElementById('id-shop-basket-comment');
      if (shopBasketItem.classList.contains('div-block')) {
         shopBasketItem.classList.add('div-none');
         shopBasketItem.classList.remove('div-block');
         shopBasketAddress.classList.add('div-block');
         shopBasketAddress.classList.remove('div-none');
      } else if (shopBasketAddress.classList.contains('div-block')) {
         shopBasketAddress.classList.add('div-none');
         shopBasketAddress.classList.remove('div-block');
         shopBasketComment.classList.add('div-block');
         shopBasketComment.classList.remove('div-none');
      }
   }

   let
      shopButton = document.getElementsByClassName('shop-button'),
      shopBasketButtonBack = document.getElementById('id-shop-basket-buttonBack'),
      shopBasketButtonNext = document.getElementById('id-shop-basket-buttonNext');
   for(let i = 0; i < shopButton.length; i++) {
      shopButton[i].addEventListener('click', myShopAddProduct);
      shopButton[i].addEventListener('click', myShopCountCost);
   }
   shopBasketButtonBack.addEventListener('click', myShopBackPage);
   shopBasketButtonNext.addEventListener('click', myShopNextPage);

   // task №3


   // task №4 begin_________________________________________________
   function changePicturesAll(newImg) {
      let bigDiv = document.getElementById('big');
      bigDiv.innerHTML = '';
      bigDiv.className = '';
      bigDiv.appendChild(newImg);
      newImg.addEventListener('error', function () {
         bigDiv.innerHTML = 'Нет картинки';
         bigDiv.className = 'no-image';
      });
   }

   function changePictures(event) {
      let
         smallSrc = event.currentTarget.getAttribute('src'),
         newImg = document.createElement('img'),
         actImg = document.getElementsByClassName('active-image');

      newImg.src = smallSrc.replace('small', 'big');    

      if (actImg.length > 0) {
         actImg[0].classList.remove('active-image');
      }
      this.classList.add('active-image');  

      changePicturesAll(newImg); 
   }

   function changePicturesBack(event) {
      let
         bigSrc = '',
         newImg = document.createElement('img'),
         actImg = document.getElementsByClassName('active-image'),
         divImg = document.getElementsByClassName('div-image'),
         firstImg = divImg[0].children[0];

      if (actImg.length > 0) {
         bigSrc = actImg[0].getAttribute('src');
         if (actImg[0] === firstImg) {
            bigSrc = 'images/big/' + divImg[0].children.length +'.jpg';
         } else {
            bigSrc = 'images/big/' + (Number(bigSrc.substr(13, 1)) - 1) + '.jpg'
         }
         actImg[0].classList.remove('active-image');
      } else {
         bigSrc = 'images/big/' + divImg[0].children.length +'.jpg';
      }
      newImg.src = bigSrc;

      let smallImg = document.querySelector('img[src="' + bigSrc.replace('big', 'small') + '"]');
      smallImg.classList.add('active-image'); 

      changePicturesAll(newImg);
   }

   function changePicturesNext(event) {
      let
         bigSrc = '',
         newImg = document.createElement('img'),
         actImg = document.getElementsByClassName('active-image'),
         divImg = document.getElementsByClassName('div-image'),
         lastImg = divImg[0].children[divImg[0].children.length - 1];

      if (actImg.length > 0) {
         bigSrc = actImg[0].getAttribute('src');
         if (actImg[0] === lastImg) {
            bigSrc = 'images/big/1.jpg';
         } else {
            bigSrc = 'images/big/' + (Number(bigSrc.substr(13, 1)) + 1) + '.jpg'
         }
         actImg[0].classList.remove('active-image');
      } else {
         bigSrc = 'images/big/1.jpg';
      }
      newImg.src = bigSrc;

      let smallImg = document.querySelector('img[src="' + bigSrc.replace('big', 'small') + '"]');
      smallImg.classList.add('active-image'); 

      changePicturesAll(newImg);
   }

   let
      images = document.getElementsByClassName('image'),
      arrowBack = document.getElementById('arrowBack'),
      arrowNext = document.getElementById('arrowNext');
   // клик по маленькой картинке (из урока 6)
   for(let i = 0; i < images.length; i++) {
      images[i].onclick = changePictures;
   }
   // стрелки на экране (из урока 6)
   arrowBack.onclick = changePicturesBack;
   arrowNext.onclick = changePicturesNext;

   // стрелки на клавиатуре
   addEventListener("keydown", function () {
      if (event.keyCode === 37) {
         changePicturesBack(event);
      } else if (event.keyCode === 39) {
         changePicturesNext(event);
      }
   });
   // task №4 end____________________________________________


////////////////////////Змейка///////////////////////////////
   /*const
      FIELD_SIZE_X = 20,
      FIELD_SIZE_Y = 20,
      SNAKE_SPEED = 300;

   let
      snake = []; // сама змейка
      direction = 'y+', // направление движения вверх
      oldDirection = 'y+', // старое направление движения вверх
      gameIsRunning = false, // запущена ли игра
      //snakeTimer,
      score = 0;

   // Генерация поля
   prepareGameField();

   function prepareGameField() {
      let gameTable = document.createElement('table');
      gameTable.classList.add('game-table');
      // Генерация ячеек
      for(let i = 0; i < FIELD_SIZE_Y; i++) {
         let row = document.createElement('tr');
         row.classList.add('game-table-row');

         for(let j = 0; j < FIELD_SIZE_X; j++) {
            let cell = document.createElement('td');
            cell.classList.add('game-table-cell');
            cell.classList.add('cell-' + i + '-' + j);
            row.appendChild(cell);
         }
         gameTable.appendChild(row);
      }
      document.getElementById('snake-field').appendChild(gameTable);
   }

   // Создание змейки
   function respawn() {
      let
         startCoordsX = Math.floor(FIELD_SIZE_X / 2),
         startCoordsY = Math.floor(FIELD_SIZE_Y / 2);
      // Голова
      let snakeHead = document.getElementsByClassName('cell-' + startCoordsY + '-' + startCoordsX)[0];
      snakeHead.classList.add('snake-unit');
      snakeHead.setAttribute('date_y', startCoordsY.toString());
      snakeHead.setAttribute('date_x', startCoordsX.toString());
      // Тело змейки
      let snakeBody = document.getElementsByClassName('cell-' + (startCoordsY + 1) + '-' + startCoordsX)[0];
      snakeBody.classList.add('snake-unit');
      snake.push(snakeHead);
      snake.push(snakeBody);
   }

   respawn();

   // Создание еды
   function createFood() {
      let foodCreated = false;
      while (!foodCreated) {
         let
            foodX = Math.floor(Math.random() * FIELD_SIZE_X),
            foodY = Math.floor(Math.random() * FIELD_SIZE_Y),
            foodCell = document.querySelector('.cell-' + foodY + '-' + foodX);
         if (!foodCell.classList.contains('snake-unit') && !foodCell.classList.contains('food-unit')) {
            foodCell.classList.add('food-unit');
            foodCreated = true;
         }
      }
   }

   // Проверка на еду
   function haveFood(unit) {
      if (unit.classList.contains('food-unit')) {
         unit.classList.remove('food-unit');
         createFood();
         score++;
         return true;
      }
      return false;
   }

   // Движение змейки
   function move() {
      let
         newUnit, // новый элемент
         coordY = parseInt(snake[snake.length - 1].getAttribute('date_y')),
         coordX = parseInt(snake[snake.length - 1].getAttribute('date_x'));

      switch (direction) {
         case 'x-':
            newUnit = document.querySelector('.cell-' + (coordY) + '-' + (coordX -= 1));
            break;
         case 'x+':
            newUnit = document.querySelector('.cell-' + (coordY) + '-' + (coordX += 1));
            break;
         case 'y-':
            newUnit = document.querySelector('.cell-' + (coordY += 1) + '-' + (coordX));
            break;
         case 'y+':
            newUnit = document.querySelector('.cell-' + (coordY -= 1) + '-' + (coordX));
            break;
      }

      // Проверка: не является ли новая часть змейкой или не выходим ли мы за границы
      if (snake.indexOf(newUnit) === -1 && newUnit !== null) {
         snake[snake.length - 1].removeAttribute('date_y');
         snake[snake.length - 1].removeAttribute('date_x');

         newUnit.classList.add('snake-unit');
         snake.push(newUnit);
         snake[snake.length - 1].setAttribute('date_y', startCoordsY.toString());
         snake[snake.length - 1].setAttribute('date_x', startCoordsX.toString());

         if (!haveFood(newUnit)) {
            // Уменьшаем хвост
            snake.splice(0, 1)[0].classList.remove('snake-unit');
         }
      } else {
         // Завершить игру
      }
      oldDirection = direction;  
   }

   function startGame() {
      gameIsRunning = true;
      direction = 'y+';
      oldDirection = 'y+';
      for(let i = 0; i < snake.length; i++) {
         snake[i].classList.remove('snake-unit');
      }
      snake = [];
      let units = document.getElementsByClassName('food-unit');
      for(let i = 0; i < units.length; i++) {
         units[i].classList.remove('food-unit');
      }

      // Начало новой игры
      clearInterval(snakeTimer);
      respawn();
      snakeTimer = setInterval(move, SNAKE_SPEED); // запустить движение змейки
      setTimeout(createFood, 5000); // создание еды каждые 5 сек.
   }*/


}