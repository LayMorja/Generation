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

let mask = document.querySelector('.mask');

window.addEventListener('load', () => {
  mask.classList.add('hide');
  setTimeout(() => {
    mask.remove();
  }, 600)
})