// одинаковая ширина и высота у слайдов

document.addEventListener("DOMContentLoaded", () => {
  const slide = document.querySelector('.gallery-slides__slide');
  const slides = document.querySelectorAll('.gallery-slides__slide');


  let slide_sizes = slide.offsetWidth + 'px';

  function countSlideSizes(width) {
    slides.forEach(el => {
      el.style.height = width;
    });
  }


  countSlideSizes(slide_sizes);

  window.addEventListener('resize', () => {
    slide_sizes = slide.offsetWidth + 'px';
    countSlideSizes(slide_sizes);
  });

});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel(
    {
      loop: true,
      items: 3,
      dots: true
    }
  );
});
