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
const accordionItems = document.querySelectorAll('.keunggulan__accordion-item')

accordionItems.forEach((item) => {
  const accordionheader = item.querySelector('.keunggulan__accordion-header')
  accordionheader.addEventListener('click', () => {
    const openItem = document.querySelector('.accordion-open')
    toggleItem(item)

    if(openItem && openItem!== item){
      toggleItem(openItem)
    }
  })
})

const toggleItem = (item) =>{
  const accordionContent = item.querySelector('.keunggulan__accordion-content')
  if(item.classList.contains('accordion-open')){
      accordionContent.removeAttribute('style')
      item.classList.remove('accordion-open')
  } else {
      accordionContent.style.height = accordionContent.scrollHeight + 'px'
      item.classList.add('accordion-open')
  }
  
}

//Scroll Section Active Link

// Show Scroll Up

// Dark Light Theme

// Scroll Reveal Anim