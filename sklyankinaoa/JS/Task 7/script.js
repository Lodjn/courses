window.onload = function () {
   /*1. Реализовать страницу корзины 
   a. Нужно уметь не только смотреть состав корзины, но и редактировать его, обновляя общую стоимость или выводя “Корзина пустая”.*/
   
   
   /*2. На странице корзины 
   a. Сделать отдельные блоки: “Состав корзины”, “Адрес доставки”, “Комментарий” 
   b. Сделать эти поля сворачиваемыми 
   c. Заполнять поля по очереди, т.е. даём посмотреть состав корзины, внизу которого есть кнопка “Далее”. Нажимаем на “Далее”, сворачивается “Состав корзины”, открывается “Адрес доставки” и т.д.*/
   
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
         if (action=="next")
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
               if((i+1)==(imagesArr.length))
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
   window.addEventListener('keydown', function(event) {
      if(event.key==="ArrowRight")
         document.getElementById("buttonPrev").click();
      else if(event.key==="ArrowLeft")
         document.getElementById("buttonNext").click();
   });
};