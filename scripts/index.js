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
