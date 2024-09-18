document.addEventListener('DOMContentLoaded', function() {
    const servicesList = document.querySelectorAll('.descr__selection li');

    servicesList.forEach(function(item) {
        item.addEventListener('click', function() {
            // Убрать класс "active" у всех элементов списка
            servicesList.forEach(function(listItem) {
                listItem.classList.remove('active');
            });

            // Добавить класс "active" к текущему элементу списка
            item.classList.add('active');

            // Скрыть все подсписки
            const submenus = document.querySelectorAll('.sub-menu');
            submenus.forEach(function(submenu) {
                submenu.style.display = 'none';
            });

            // Показать соответствующий подсписок
            const index = Array.prototype.indexOf.call(item.parentElement.children, item);
            submenus[index].style.display = 'block';
        });
    });
});

// Получаем все элементы списка помещений
const items = document.querySelectorAll('.sub-menu__ul-item');
  
// Скрываем все списки услуг
const subMenus = document.querySelectorAll('.sub-menu__ul-services');
subMenus.forEach(menu => {
  menu.style.display = 'none';
});

// Открываем первый список для "Комнаты"
const firstSubMenu = document.querySelector('#sublist-item-1 .sub-menu__ul-services');
firstSubMenu.style.display = 'block';

// Добавляем обработчик события для каждого элемента списка помещений
items.forEach(item => {
  item.addEventListener('click', () => {
    // Проверяем, открыт ли список услуг для текущего элемента
    const submenu = item.nextElementSibling;
    const isSubMenuOpen = submenu.style.display === 'block';
    
    // Скрываем все списки услуг
    subMenus.forEach(menu => {
      menu.style.display = 'none';
    });
    
    // Открываем список услуг, если он ранее не был открыт
    if (!isSubMenuOpen && submenu.classList.contains('sub-menu__ul-services')) {
      submenu.style.display = 'block';
    }
  });
});

