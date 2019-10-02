window.onload = function () {
   // task №1
   function myAddInput() {
      let
         div = document.getElementById('divTask1'),
         input = document.createElement('input');
      input.type = 'text';
      div.appendChild(input);
   }

   let button1 = document.getElementById('button1');
   button1.onclick = myAddInput;

   // task №2
   function myMoveGreenbox(event) {
      let greenBox = document.getElementById('child');
      greenBox.style.left = event.clientX + 'px';
      greenBox.style.top = event.clientY + 'px';
   }

   let box = document.getElementById('box');
   box.onclick = myMoveGreenbox;

   // task №3
   let button3 = document.getElementById('button3');
   button3.addEventListener('click', function () {
      let
         div = document.getElementById('divTask3'),
         input = document.getElementById('input3').cloneNode(true);
      input.id = 'input' + (Number(input.id.substr(5, 1)) + 1);
      div.appendChild(input);
   });

   // tasks №4, №6
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
   for(let i = 0; i < images.length; i++) {
      images[i].onclick = changePictures;
   }
   arrowBack.onclick = changePicturesBack;
   arrowNext.onclick = changePicturesNext;


   // tasks №5
   function myShopAddProduct(event) {
      let
         shopItem = this.parentNode,
         shopImage = shopItem.getElementsByClassName('shop-image'),
         shopCost = shopItem.getElementsByClassName('shop-cost'),
         basket = document.getElementById('id-shop-basket-item');
      basket.innerHTML += '<br><span>' + shopImage[0].innerText + '</span> <span class="shop-cost-basket">(' + shopCost[0].innerText + ')</span>';
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
      shopCostAll.innerText = 'Сумма заказа: ' + sumCostAll + ' руб.';
   }

   let shopButton = document.getElementsByClassName('shop-button');
   for(let i = 0; i < shopButton.length; i++) {
      shopButton[i].addEventListener('click', myShopAddProduct);
      shopButton[i].addEventListener('click', myShopCountCost);
   }
}