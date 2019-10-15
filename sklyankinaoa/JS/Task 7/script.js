window.onload = function () {
   /*1. Реализовать страницу корзины 
   a. Нужно уметь не только смотреть состав корзины, но и редактировать его, обновляя общую стоимость или выводя “Корзина пустая”.*/
   
   /*2. На странице корзины 
   a. Сделать отдельные блоки: “Состав корзины”, “Адрес доставки”, “Комментарий” 
   b. Сделать эти поля сворачиваемыми 
   c. Заполнять поля по очереди, т.е. даём посмотреть состав корзины, внизу которого есть кнопка “Далее”. Нажимаем на “Далее”, сворачивается “Состав корзины”, открывается “Адрес доставки” и т.д.*/

   function allPricesInBasket(event) {
      let
         shopCostBasket = document.getElementsByClassName("priceInBasket"),
         total = document.getElementById("totalPrice"),
         sumAll = 0;
      for(let i = 0; i < shopCostBasket.length; i++) {
         sumAll += Number(shopCostBasket[i].innerText);
      }
      if (sumAll === 0) {
         total.innerText = "Итого к оплате: 0 руб.";
         total.className = "nullBasket";

      } else {
         total.innerText = "Итого к оплате: " + sumAll + " руб.";
         total.className = "fullBasket";
      }
   }
   
   function delProductFromBasket(event) {
      let
         delDiv = this.parentNode,
         basket = document.getElementById("inBasket");
      basket.removeChild(delDiv);
   }

   function addProductInBasket(event) {
      let
         parentDiv = this.parentNode,
         productDiv = parentDiv.getElementsByClassName("ProductImg"),
         productImage = productDiv[0].getElementsByClassName("imageBasket"),
         shopCost = parentDiv.getElementsByClassName("prices"),
         basket = document.getElementById("inBasket"),
         blockBasket = document.createElement("div"),
         blockNameImg = document.createElement("div"),
         blockName = document.createElement("div"),
         blockImg = document.createElement("img"),
         blockPrice = document.createElement("div"),
         buttonDel = document.createElement("button");
      
      blockBasket.className = "topProduct";
      blockNameImg.className = "nameProduct";

      blockName.innerText = productDiv[0].innerText;
      blockName.className = "nameProduct";

      blockImg.src = productImage[0].src;
      blockImg.className = "ProductImgSmall";


      blockPrice.innerText = shopCost[0].innerText;
      blockPrice.className = "priceInBasket priceProduct";
      
      buttonDel.className = "delProduct";
      buttonDel.innerText = "удалить";
      buttonDel.addEventListener("click", delProductFromBasket);
      buttonDel.addEventListener("click", allPricesInBasket);
      
      blockNameImg.appendChild(blockName);
      blockNameImg.appendChild(blockImg);
      blockBasket.appendChild(blockNameImg);
      blockBasket.appendChild(blockPrice);
      blockBasket.appendChild(buttonDel);

      basket.appendChild(blockBasket);
   }

   function myShopBackPage(event) {
      let
         basket = document.getElementById("inBasket"),
         fieldAddress = document.getElementById("basketAddress"),
         fieldComment = document.getElementById("basketComm");
      if (fieldComment.classList.contains("divOn")) {
         fieldComment.classList.add("divOff");
         fieldComment.classList.remove("divOn");
         fieldAddress.classList.add("divOn");
         fieldAddress.classList.remove("divOff");
      } else if (fieldAddress.classList.contains("divOn")) {
         fieldAddress.classList.add("divOff");
         fieldAddress.classList.remove("divOn");
         basket.classList.add("divOn");
         basket.classList.remove("divOff");
      }
   }

   function myShopNextPage(event) {
      let
         basket = document.getElementById("inBasket"),
         fieldAddress = document.getElementById("basketAddress"),
         fieldComment = document.getElementById("basketComm");
      if (basket.classList.contains("divOn")) {
         basket.classList.add("divOff");
         basket.classList.remove("divOn");
         fieldAddress.classList.add("divOn");
         fieldAddress.classList.remove("divOff");
      } else if (fieldAddress.classList.contains("divOn")) {
         fieldAddress.classList.add("divOff");
         fieldAddress.classList.remove("divOn");
         fieldComment.classList.add("divOn");
         fieldComment.classList.remove("divOff");
      }
   }

   let
      shopButton = document.getElementsByClassName("buttonBuy"),
      shopBasketButtonBack = document.getElementById("basketButtonBack"),
      shopBasketButtonNext = document.getElementById("basketButtonNext");

   for(let i = 0; i < shopButton.length; i++) {
      shopButton[i].addEventListener("click", addProductInBasket);
      shopButton[i].addEventListener("click", allPricesInBasket);
   }
   shopBasketButtonBack.addEventListener("click", myShopBackPage);
   shopBasketButtonNext.addEventListener("click", myShopNextPage);
   
   /*4.* Добавить в галерею функцию перехода к следующему изображению. По сторонам от большой картинки должны быть стрелки “вперед” и “назад”, 
      по нажатию на которые происходит замена изображения на следующее или предыдущее.*/
   function changePict(event) {
      let bigDiv = document.getElementById("big_picture"), //большой блок
          smallSrc = event.currentTarget.getAttribute("src"),//находим src
          newImg = document.createElement("img"); //создаем новый тег img
      
      bigDiv.innerHTML = ""; //Очиста блока
      newImg.src = smallSrc.replace("small","big");//меняем small на big
      newImg.id = "big_img";
      
      newImg.onload = function(){
         bigDiv.appendChild(newImg);//все ок
      }
      newImg.onerror = function(){
         bigDiv.innerHTML = "Не удалось загрузить картинку";//не нашли картинку
      }
   }
   
   let images = document.getElementsByClassName("image");
   for(let i = 0; i < images.length; i++){
      images[i].onclick = changePict;
   }
   
   function preView(bigDiv, action) {
      let newImg = document.createElement("img"); //создаем новый тег img
         newImg.id = "big_img";//присваиваем идентификатор
         if (action==="next")
            newImg.src = imagesArr[0];//устанавливаем 1 картинку
         else
            newImg.src = imagesArr[imagesArr.length - 1];//устанавливаем 1 картинку
         bigDiv.appendChild(newImg);//добавляем картинку в большое поле
   }
   
   function prevImage(event) {
      let bigDiv = document.getElementById("big_picture"), //большой блок
          newImgPrev = document.createElement("img"), //создаем новый тег img
          imagesArr = ["img/gallery/big/img_1.jpg", "img/gallery/big/img_2.jpg", "img/gallery/big/img_3.jpg"];//массив адресов картинок
          
      //проверю на наличе дчерних элементов
      if(bigDiv.hasChildNodes()) {
         let imgDiv = document.getElementById("big_img");//берем картинку и ищем ее адрес в массиве адресов
         for(let i = 0; i < imagesArr.length; i++){
            let puthImg = imgDiv.src;
            if(puthImg.indexOf(imagesArr[i])>0) {
               //если нашли нужный адрес, то проверяем есть ли предыдущий, если нет, то берем последнюю картинку (циклим переключние)
               if((i-1)>=0)
                  newImgPrev.src = imagesArr[i-1];
               else
                  newImgPrev.src = imagesArr[imagesArr.length - 1];
               newImgPrev.id = "big_img";//присваиваем идентификатор
               bigDiv.innerHTML = ""; //Очиста блока
               bigDiv.appendChild(newImgPrev);//добавляем новую картинку в большое поле
               break;
            }
         }
      }
      else  preView(bigDiv, "prev");
   } 
   
   function nextImage(event) {
      let bigDiv = document.getElementById("big_picture"), //большой блок
          newImgPrev = document.createElement("img"), //создаем новый тег img
          imagesArr = ["img/gallery/big/img_1.jpg", "img/gallery/big/img_2.jpg", "img/gallery/big/img_3.jpg"];//массив адресов картинок
          
      //проверю на наличе дчерних элементов
      if(bigDiv.hasChildNodes()) {
         let imgDiv = document.getElementById("big_img");//берем картинку и ищем ее адрес в массиве адресов
         for(let i = 0; i < imagesArr.length; i++){
            let puthImg = imgDiv.src;
            if(puthImg.indexOf(imagesArr[i])>0) {
               //если нашли нужный адрес, то проверяем есть ли следующий, если нет, то берем первую картинку (циклим переключние)
               if((i+1)===(imagesArr.length))
                  newImgPrev.src = imagesArr[0];
               else
                  newImgPrev.src = imagesArr[i+1];
               newImgPrev.id = "big_img";//присваиваем идентификатор
               bigDiv.innerHTML = ""; //Очиста блока
               bigDiv.appendChild(newImgPrev);//добавляем картинку в большое поле
               break;
            }
         }
      }
      else  preView(bigDiv, "next");
   }
   
   let buttonPrev = document.getElementById("buttonPrev"),
       buttonNext = document.getElementById("buttonNext"),
       imagesArr = ["img/gallery/big/img_1.jpg", "img/gallery/big/img_2.jpg", "img/gallery/big/img_3.jpg"];

   buttonPrev.addEventListener("click", prevImage);
   buttonNext.addEventListener("click", nextImage);
   
   window.addEventListener("keydown", function(event) {
      if(event.key==="ArrowRight")
         document.getElementById("buttonPrev").click();
      else if(event.key==="ArrowLeft")
         document.getElementById("buttonNext").click();
   });
};