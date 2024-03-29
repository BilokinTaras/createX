const portSlider = document.querySelector('.portfolio-section__items');
const relatedSlider = document.querySelector('.related-projects__items');

if(portSlider){
  const portfolioSlider  = new Swiper(portSlider, {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    on:{
     init: function(){
       const activeSlide = portSlider.querySelector('.swiper-slide-active');
 
       const nextActiveSlide = activeSlide.nextElementSibling;
 
       const nextNextActiveSlide = nextActiveSlide.nextElementSibling;
 
       activeSlide.classList.add('slider-visible');
 
       nextActiveSlide.classList.add('slider-visible');
 
       nextNextActiveSlide.classList.add('slider-visible');
     }
    },
    // Navigation arrows
    navigation: {
      nextEl: '.portfolio-section__next',
      prevEl: '.portfolio-section__prev',
    },
    breakpoints: {
      576:{
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      }
    },
  });
 
  document.querySelector('.portfolio-section__prev').addEventListener('click', () => {
   const activeSlide = portSlider.querySelector('.swiper-slide-next');
 
   document.querySelectorAll('.portfolio-section__items .swiper-slide').forEach(el => {
     el.classList.remove('slider-visible');
   });
 
   if(activeSlide.previousElementSibling){
     const nextActiveSlide = activeSlide.previousElementSibling;
     activeSlide.classList.add('slider-visible');
     nextActiveSlide.classList.add('slider-visible');
     activeSlide.nextElementSibling.classList.add('slider-visible');
   }
  });
  document.querySelector('.portfolio-section__next').addEventListener('click', () => {
   const activeSlide = portSlider.querySelector('.swiper-slide-active');
 
   const nextActiveSlide = activeSlide.nextElementSibling;
 
   const nextNextActiveSlide = nextActiveSlide.nextElementSibling;
 
   document.querySelectorAll('.portfolio-section__items .swiper-slide').forEach(el => {
     el.classList.remove('slider-visible');
   });
 
   activeSlide.classList.add('slider-visible');
 
   nextActiveSlide.classList.add('slider-visible');
 
   nextNextActiveSlide.classList.add('slider-visible');
 });
}
if(relatedSlider){
  const relatedProjSlider  = new Swiper(relatedSlider, {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    on:{
     init: function(){
       const activeSlide = relatedSlider.querySelector('.swiper-slide-active');
 
       const nextActiveSlide = activeSlide.nextElementSibling;
 
       const nextNextActiveSlide = nextActiveSlide.nextElementSibling;
 
       activeSlide.classList.add('slider-visible');
 
       nextActiveSlide.classList.add('slider-visible');
 
       nextNextActiveSlide.classList.add('slider-visible');
     }
    },
    // Navigation arrows
    navigation: {
      nextEl: '.related-projects__next',
      prevEl: '.related-projects__prev',
    },
    breakpoints: {
      576:{
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      }
    },
  });
 
  document.querySelector('.related-projects__prev').addEventListener('click', () => {
   const activeSlide = relatedSlider.querySelector('.swiper-slide-next');
 
   document.querySelectorAll('.related-projects__items .swiper-slide').forEach(el => {
     el.classList.remove('slider-visible');
   });
 
   if(activeSlide.previousElementSibling){
     const nextActiveSlide = activeSlide.previousElementSibling;
     activeSlide.classList.add('slider-visible');
     nextActiveSlide.classList.add('slider-visible');
     activeSlide.nextElementSibling.classList.add('slider-visible');
   }
  });
  document.querySelector('.related-projects__next').addEventListener('click', () => {
   const activeSlide = relatedSlider.querySelector('.swiper-slide-active');
 
   const nextActiveSlide = activeSlide.nextElementSibling;
 
   const nextNextActiveSlide = nextActiveSlide.nextElementSibling;
 
   document.querySelectorAll('.related-projects__items .swiper-slide').forEach(el => {
     el.classList.remove('slider-visible');
   });
 
   activeSlide.classList.add('slider-visible');
 
   nextActiveSlide.classList.add('slider-visible');
 
   nextNextActiveSlide.classList.add('slider-visible');
 });
}

const testimonialsItems = document.querySelector('.testimonials__items');

if(testimonialsItems){
  const testimonialsSlider  = new Swiper(testimonialsItems, {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.testimonials__next',
      prevEl: '.testimonials__prev',
    },
  });
}

const workImages = document.querySelector('.work-images-slider');

if(workImages){
  const workSlider = new Swiper(".work-images-nav", {
    spaceBetween: 20,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      576:{
        slidesPerView: 6,
      },
      768: {
        slidesPerView: 10,
      }
    },
  });
  const workSliderNav = new Swiper(workImages, {
    spaceBetween: 20,
    slidesPerView: 1,
    navigation: {
      nextEl: ".work-images__next",
      prevEl: ".work-images__prev",
    },
    thumbs: {
      swiper: workSlider,
    },
  });
}
const historySlider = document.querySelector('.history-slider');
if(historySlider){
  const workSlider = new Swiper(historySlider, {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.history__next',
      prevEl: '.history__prev',
    },
  });
  workSlider.on('slideChange', function () {
    historyBtns.forEach(el => {
      el.classList.remove('history-nav__btn--active');
    });
    document.querySelector(`.history-nav__btn[data-index = "${workSlider.realIndex}"]`).classList.add('history-nav__btn--active');
  });
  const historyBtns = document.querySelectorAll('.history-nav__btn');
  historyBtns.forEach((elem, idx) => {
    elem.setAttribute('data-index', idx);
    elem.addEventListener('click', (e) => {
      const index = e.currentTarget.dataset.index;
      historyBtns.forEach(el => {
        el.classList.remove('history-nav__btn--active');
      });
      e.currentTarget.classList.add('history-nav__btn--active');
      workSlider.slideTo(index);
    });
  });
}


  const heroSlider  = new Swiper('.hero-slider', {
    slidesPerView: 1,
    navigation: {
      nextEl: '.hero__next',
      prevEl: '.hero__prev',
    },
    autoplay:{
      delay: 1000,
    },
    pagination: {
      el: '.hero__pag',
      type: 'bullets',
      clickable: true
    },
    on:{
      init: function(){
        const paginationBullets = document.querySelectorAll('.hero__pag .swiper-pagination-bullet');

        paginationBullets.forEach(el => {
          el.innerHTML = `<span class="hero__bar"></span>`;
        });
      }
     },
  });



