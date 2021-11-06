// Declare swipers

let galleryThumbs = new Swiper('.gallery-thumbs', {
    slidesPerView: 12,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  	observer: true
});

let galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    slidesPerView: 2,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    thumbs: {
        swiper: galleryThumbs
    },
  	observer: true
});



const lectecia = document.getElementById('lectecia');
const belle = document.getElementById('belle');
let selectedModel = 'Lectecia, XL/XXL';
const allImages = [...document.getElementsByTagName('img')];

let imagesArray = allImages.map(image => {
  return {
    src: image.src,
    alt: image.alt
  }
});

const firstFilter = () => {
  imagesArray.forEach((image, index) => {
    if (image.alt !== selectedModel) {
      if (index < 10) {
        galleryTop.removeSlide(index);
        galleryThumbs.removeSlide(index);
      }
    }});
  galleryTop.update();
  galleryThumbs.update();
}

const filterImages = () => {
  galleryTop.removeAllSlides();
  galleryThumbs.removeAllSlides();
  imagesArray.forEach((image, index) => {
    if (index < 10) {
    	if (image.alt === selectedModel) {
        galleryTop.appendSlide(`<div class="swiper-slide"><img src=${image.src} alt=${image.alt}></div>`);
        }} else {
          if (image.alt === selectedModel) {
        galleryThumbs.appendSlide(`<div class="swiper-slide"><img src=${image.src} alt=${image.alt}></div>`);
        }
      	}
  });
  galleryTop.update();
  galleryThumbs.update();
}

const clickLectecia = () => {
    belle.classList.remove('active-model');
    lectecia.classList.add('active-model');
  	selectedModel = 'Lectecia, XL/XXL';
  	filterImages();
}

const clickBelle = () => {
    belle.classList.add('active-model');
    lectecia.classList.remove('active-model');
  	selectedModel = 'Belle, S/S';
  	filterImages();
}

firstFilter();
galleryTop.update();
galleryThumbs.update();
lectecia.addEventListener('click', clickLectecia);
belle.addEventListener('click', clickBelle);
