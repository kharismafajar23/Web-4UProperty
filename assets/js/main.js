// Change Bg Header
function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 50) header.classList.add('scroll-header');
        else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// Swiper Rumah
var swiperRumah = new Swiper(".rumah__container", {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// Accordion Keunggulan

//Scroll Section Active Link

// Show Scroll Up

// Dark Light Theme

// Scroll Reveal Anim