window.onload = function () {
   /*
   3. * Некая сеть фастфудов предлагает несколько видов гамбургеров:
   ** - маленький (50 рублей, 20 калорий);**
   - большой (100 рублей, 40 калорий).
   Гамбургер может быть с одним из нескольких видов начинок (обязательно):
   ** - сыром (+ 10 рублей, + 20 калорий);**
   ** - салатом (+ 20 рублей, + 5 калорий);**
   - картофелем (+ 15 рублей, + 10 калорий).

   *Дополнительно, гамбургер можно посыпать приправой (+ 15 рублей, 0 калорий)
   и полить майонезом (+ 20 рублей, + 5 калорий). *

   Напишите программу, рассчитывающую стоимость и калорийность гамбургера.
   Используйте ООП подход
   (подсказка: нужен класс Гамбургер, константы, методы для выбора опций и
   расчета нужных величин).
   */

   function Hamburger(size, stuffing, spice, mayo) {
      this.size = size;
      this.stuffing = stuffing;
      this.spice = spice;
      this.mayo = mayo;
   }

   Hamburger.prototype.getToppings = function () {
      let arr = [0, 0];
      if (this.spice) {
         arr = [15, 0]
      }
      if (this.mayo) {
         arr[0] += 20;
         arr[1] += 5;
      }
      return arr;
   };

   Hamburger.prototype.getSize = function () {
      switch (this.size) {
         case 'big': return [100, 40];
         case 'small': return [50, 20];
      }
   };

   Hamburger.prototype.getStuffing = function () {
      switch (this.stuffing) {
         case 'cheese': return [10, 20];
         case 'salad': return [20, 5];
         case 'potato': return [15, 10];
      }
   };

   Hamburger.prototype.calculatePrice = function () {
      return this.getSize()[0] + this.getStuffing()[0] + this.getToppings()[0];
   };

   Hamburger.prototype.calculateCalories = function () {
      return this.getSize()[1] + this.getStuffing()[1] + this.getToppings()[1];
   };

   document.getElementById('id_button').onclick = function() {
      let
         size = document.getElementById('id_size').value,
         stuffing = document.getElementById('id_stuffing').value,
         spice = document.getElementById('id_spice').checked,
         mayo = document.getElementById('id_mayo').checked;
      
      let hamburger = new Hamburger(size, stuffing, spice, mayo);
      document.getElementById('id_price').innerHTML = String(hamburger.calculatePrice() + ' руб.');
      document.getElementById('id_calories').innerHTML = String(hamburger.calculateCalories() + ' Ккал');
   };
};