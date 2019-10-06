window.onload = function () {
   /*1. Дано поле ввода <input type="text"> рядом с ним кнопка +. При нажатии на кнопку необходимо чтобы добавилось еще одно поле ввода*/
   function addInput() {
      let inp = document.createElement("input"),
          parent = document.getElementById("Task1");
      
      inp.className = "myClass1";
      parent.appendChild(inp);
   }

   let button1 = document.getElementById("button1");
   button1.addEventListener("click", addInput);

   /*2. Дан блок(box) шириной и высотой 400px, внутри которого находится зеленый квадрат шириной 50px(child), необходимо при нажатии на 
      любую область родительского блока(box) чтобы дочерний элемент child переместился в место клика.*/
   let boxParent = document.getElementById("boxParent"),
       boxChild = document.getElementById("boxChild"),
       diffX = boxParent.offsetWidth - boxChild.offsetWidth,
       diffY = boxParent.offsetHeight - boxChild.offsetHeight;

   boxParent.addEventListener('click', function (event) {
      //использую boxParent.getBoundingClientRect().x, boxParent.getBoundingClientRect().y, чтобы получить координаты родительского блока на странице, и скорректировать координаты в моем блоке, для корректного перемещения
      let newX = event.clientX - boxParent.getBoundingClientRect().x,
          newY = event.clientY - boxParent.getBoundingClientRect().y;
      //если квадрат выходит за границы области перемещения, то прижимаю его к самой границе
      if (newX > diffX)
         newX = diffX;
      if (newY > diffY)
         newY = diffY;
      //присваиваю новые координаты
      boxChild.style.left = newX + "px";
      boxChild.style.top = newY + "px";
   }); 
   
   /*3. Дано поле ввода <input type="text"> под ним кнопка. При нажатии на кнопку необходимо чтобы произошло дублирование данного инпута.
   (cloneNode необходимо использовать и понять что это за зверь такой)*/
   function cloneInput() {
      let boxClone = document.getElementById("boxParent3"),
          inputClone = boxClone.cloneNode(true);
      //клону присваиваем новый id
      inputClone.id = "newBoxParent3";
      
      //проверяем добавили ли уже клона или еще нет
      if(!document.getElementById("newBoxParent3"))
         boxClone.after(inputClone);
      else
         alert("Клонирование уже выполнено");
   }

   let button3 = document.getElementById("button3");
   button3.addEventListener("click", cloneInput);
   
   /*4. Доработать функцию замены картинки в галерее таким образом, чтобы она проверяла наличие картинки по указанному в src адресу.*/
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
   
   /*5. * Реализовать модуль корзины. Создать блок товаров и блок корзины. У каждого товара есть кнопка «Купить», при нажатии на которую 
      происходит добавление имени и цены товара в блок корзины. Корзина должна уметь считать общую сумму заказа.*/
      
      
   /*6.** Добавить в галерею функцию перехода к следующему изображению. По сторонам от большой картинки должны быть стрелки “вперед” и “назад”, 
      по нажатию на которые происходит замена изображения на следующее или предыдущее.*/
      
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
      else {
         let newImg = document.createElement("img"); //создаем новый тег img
         newImg.src = imagesArr[imagesArr.length - 1];//устанавливаем 1 картинку
         newImg.id = "big_img";//присваиваем идентификатор
         bigDiv.appendChild(newImg);//добавляем картинку в большое поле
      }
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
      else {
         let newImg = document.createElement("img"); //создаем новый тег img
         newImg.src = imagesArr[0];//устанавливаем 1 картинку
         newImg.id = "big_img";//присваиваем идентификатор
         bigDiv.appendChild(newImg);//добавляем картинку в большое поле
      }
   }
   
   let buttonPrev = document.getElementById("buttonPrev"),
       buttonNext = document.getElementById("buttonNext"),
       imagesArr = ["img/gallery/big/img_1.jpg", "img/gallery/big/img_2.jpg", "img/gallery/big/img_3.jpg"];

   buttonPrev.addEventListener("click", prevImage);
   buttonNext.addEventListener("click", nextImage);
};