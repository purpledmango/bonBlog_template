const menu_icon_closed = document.getElementById('menu-closed');
const menu_icon_opened = document.getElementById('menu-opened');
const mobile_menu_list = document.getElementById('mobile-menu-list');

menu_icon_closed.addEventListener('click', ()=>{
    // Remove open menu ico
    menu_icon_opened.classList.remove('hide');
    menu_icon_closed.classList.remove('show');
    mobile_menu_list.classList.remove('hide');
    // Switch to open menu icon

    menu_icon_opened.classList.toggle('show');
    menu_icon_closed.classList.toggle('hide');
    mobile_menu_list.classList.toggle('show');

});

menu_icon_opened.addEventListener('click', ()=>{
    // Remove open menu ico
    menu_icon_opened.classList.remove('show');
    menu_icon_closed.classList.remove('hide');
    mobile_menu_list.classList.remove('show');

    // Switch to open menu icon

    menu_icon_opened.classList.toggle('hide');
    menu_icon_closed.classList.toggle('show');
    mobile_menu_list.classList.toggle('hide');

});