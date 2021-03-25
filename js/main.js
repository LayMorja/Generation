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

// Слайдер градиента
const gradientSwiper = new Swiper('.gradient-swiper', {
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

window.onload = function(){
    if(window.innerWidth >= 450)
    document.getElementById('video-container').innerHTML = '<video id="nubexVideo" loop autoplay muted playsinline poster="./img/video/video.jpg"><source data-src="./img/video/video.mp4"><source data-src="./img/video/video.webm" type="video/webm"></video>'
};