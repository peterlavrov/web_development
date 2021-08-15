// одинаковая ширина и высота у слайдов и ширины углов у цен

const slide = document.querySelector('.gallery-slides__slide');
const slides = document.querySelectorAll('.gallery-slides__slide');

console.log(slides);

let slide_sizes = slide.offsetWidth + 'px';

function countSlideSizes (width) {
  slides.forEach(el => {
    el.style.height = width;
  });
}


countSlideSizes(slide_sizes);

window.addEventListener('resize', () => {
  slide_sizes = slide.offsetWidth + 'px';
  countSlideSizes(slide_sizes);
});


