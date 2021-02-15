// Слайдер тёмной темы
const darkThemeSwiper = new Swiper('.dark-theme-swiper', {
  // параметры слайдера
  loop: true,
  slidesPerView: 1,

  // навигационные стрелки
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Слайдер асимметричного блока
const asymSwider = new Swiper('.asym-swiper', {
  // параметры слайдера
  loop: true,
  slidesPerView: 1,

  // навигационные стрелки
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Видео-слайдер
const videoSwiper = new Swiper('.video-swiper', {
  // параметры слайдера
  loop: true,
  slidesPerView: 1,

  // навигационные стрелки
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Лоадер сайта
let mask = document.querySelector('.mask');

window.addEventListener('load', () => {
  mask.classList.add('hide');
  setTimeout(() => {
    mask.remove();
  }, 600)
})

// // Эффект параллакса на главном слайде
// var rellax = new Rellax('.rellax'); 