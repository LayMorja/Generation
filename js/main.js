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
  if(window.innerWidth >= 430) {
    document.getElementById('video-container').innerHTML = '<video id="nubexVideo" loop autoplay muted playsinline poster="./img/video/video.jpg"><source data-src="./img/video/video.mp4"><source data-src="./img/video/video.webm" type="video/webm"></video>'
  } else {
    document.getElementById("video-ph").innerHTML = "Все устали от статических фонов на сайтах, все хотят движение и динамику. Благодаря видео дизайнеры могут создать определенные эмоции, сравнимые просмотром настоящего кино.";
    document.getElementById("video-phar").innerHTML = "В этом году увеличится количество сайтов с видеозаставками на фоне, ведь видео делает страницу сайта более живой и динамичной. Это привлекает внимание пользователей, они просматривают ролики и понимают посыл дизайнера, который он хотел показать. Видеоклипы на фоне первого экрана сайта могут быть размером всего от нескольких секунд, до полноразмерного клипа со звуком и глубоким смыслом. И не стоит бояться долго загрузки, ведь скорость доступа к интернету с каждым годом растет, поэтому это не будет проблемой для пользователей.";
  }
}