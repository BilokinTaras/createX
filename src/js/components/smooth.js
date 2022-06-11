   const scroll = new SmoothScroll('.to-top');
   const toTop = document.querySelector('.to-top');
   let heroHeight;

   const isVisibleToTop = (y = 0) =>{
   
      if(y >= heroHeight){
         toTop.classList.add('to-top--active');
      } else {
         toTop.classList.remove('to-top--active');
      }
   };
   const scrollFunc = () => {
      isVisibleToTop();
      window.addEventListener('scroll', () => {
         let y = window.scrollY;
         isVisibleToTop(y);
      });
   }
   if(document.querySelector('.hero')){
      heroHeight = document.querySelector('.hero').offsetHeight;
      scrollFunc();

   } else if(document.querySelector('.page-hero')){
      heroHeight = document.querySelector('.page-hero').offsetHeight;
      scrollFunc();
   }

