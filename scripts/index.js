let popup = document.querySelector('.popup'); // Фон попап окна
let popupctnr = document.querySelector('.popup__container'); // Само окно
let openPopupButton = document.querySelector('.header__button'); // Кнопкa для показа окна
let closePopupButton = document.querySelector('.popup__close-icon'); // Кнопка для скрытия окна

openPopupButton.addEventListener('click', (e) => {
  e.preventDefault();
  popup.classList.add('popup_opened'); // добавили модификатор блоку popup
})

closePopupButton.addEventListener('click', (e) => {
  e.preventDefault();
  popup.classList.remove('popup_opened'); // удалили модификатор
})

let footerAuthorsBg = document.querySelector('.footer__authors_bg'); // Фон окна
let footerAuthors = document.querySelector('.footer__authors'); // Само окно
let openAuthorsButton = document.querySelector('.footer__copyright'); // Кнопкa для показа окна
let closeAuthorButton = document.querySelector('.footer__close-icon'); // Кнопка для скрытия окна

openAuthorsButton.addEventListener('click', (e) => {
  e.preventDefault();
  footerAuthorsBg.classList.add('footer__authors_bg_active');
})

openAuthorsButton.addEventListener('click', (e) => {
  e.preventDefault();
  footerAuthors.classList.add('footer__authors_active');
})

closeAuthorButton.addEventListener('click', () => {
    footerAuthorsBg.classList.remove('footer__authors_bg_active'); // Убираем активный класс с фона
    footerAuthors.classList.remove('footer__authors_active'); // И с окна
});




let menuctnr = document.querySelector('.burger-menu__container'); // Окно меню
let openMenuButton = document.querySelector('.burger-menu__button'); // Кнопкa для показа меню
let closeMenuButton = document.querySelector('.burger-menu__button-close'); // Кнопка для скрытия меню


openMenuButton.addEventListener('click', (e) => {
  e.preventDefault();
  menuctnr.classList.add('burger-menu_opened'); // добавили модификатор контейнеру
  closeMenuButton.classList.add('burger-menu__button-close_activ'); // добавили модификатор контейнеру
  openMenuButton.classList.add('burger-menu__button_inactive'); // добавили модификатор контейнеру
})

closeMenuButton.addEventListener('click', (e) => {
  e.preventDefault();
  menuctnr.classList.remove('burger-menu_opened'); // удалили модификатор
  closeMenuButton.classList.remove('burger-menu__button-close_activ'); // удалили модификатор
  openMenuButton.classList.remove('burger-menu__button_inactive'); // добавили модификатор контейнеру
})