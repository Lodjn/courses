window.onload = function () {
   function Container() {
      this.id = "";
      this.className = "";
      this.htmlCode = "";
   }
   Container.prototype.render = function() {
      return this.htmlCode;
   };
   /* 1. метод для удаления DOM-узла */
   Container.prototype.remove = function() {
      var elem = document.getElementById(this.id);
      elem.parentElement.removeChild(elem);
   };

   function Menu(myId, myClass, myItems) {
      Container.call(this);
      this.id = myId;
      this.className = myClass;
      this.items = myItems;
   }
   Menu.prototype = Object.create(Container.prototype);
   Menu.prototype.constructor = Menu;
   Menu.prototype.render = function() {
      var menuList = "";
       for (var i in this.items) {
         if (this.items.hasOwnProperty(i)) {
            menuList += this.items[i].render();
         }
      }
      return "<ul id='" + this.id + "'>" + menuList + "</ul>";
   };

   function MenuItem(myId, myHref, myTitle) {
      Container.call(this);
      this.id = myId;
      this.className = 'menu_class';
      this.href = myHref;
      this.title = myTitle;
   }
   MenuItem.prototype = Object.create(Container.prototype);
   MenuItem.prototype.constructor = MenuItem;
   MenuItem.prototype.render = function() {
      return "<li id='" + this.id + "' class='" + this.className + "'><a href='" + this.href + "'>" + this.title + "</a></li>";
   };

   /* 2. Создать наследника класса Menu –
   новый класс должен уметь строить меню со вложенными пунктами, т.е с подменю.
   Подсказка: главный секрет в обходе объекта пунктов меню и проверке типов. */
   function SubMenu(myId, myClass, myItems) {
     Menu.call(this, myId, myClass, myItems);
   }
   SubMenu.prototype = Object.create(Menu.prototype);
   SubMenu.prototype.constructor = SubMenu;
   SubMenu.prototype.render = function() {
     var subMenuList = "";
       for (var j in this.items) {
         if (this.items[j] instanceof Array) {
            subMenuList += "<li id='" + this.items[j][0].id + "' class='" + this.items[j][0].className + "'><a href='" + this.items[j][0].href + "'>" + this.items[j][0].title + "</a>";
            subMenuList += this.items[j][1].render();
            subMenuList += "</li>";
         } else {
            subMenuList += this.items[j].render();
         }
       }
     return "<ul id='" + this.id + "'>" + subMenuList + "</ul>";
   };

   var item1 = new MenuItem('item_1', '/','Главная');
   var itemDel = new MenuItem('item_del', '#','Лишний пункт');
   var item2 = new MenuItem('item_2', '/catalog','Каталог');
   var item3 = new MenuItem('item_3', '/contacts','Контакты');
   var item21 = new MenuItem('item_2_1', 'Calc/calc.html','Калькулятор для гамбургеров');
   var item22 = new MenuItem('item_2_2', '#','Товар 2');
   var menu = new Menu('my_menu_1', 'menu_class', [item21, item22]);
   var items = [item1, itemDel, [item2, menu], item3];

   var submenu = new SubMenu('my_submenu', 'menu_class', items);

   document.write(submenu.render());
   
   /* 1. Улучшить базовый класс, добавив в него общий для всех метод remove(),
   который удаляет соответствующий DOM-узел. */
   itemDel.remove();
};