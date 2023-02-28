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
const section = document.querySelectorAll('section[id]')

function scrollActive(){
  const scrollY = window.pageYOffset

  section.forEach(current => {
    const sectionHeight = current.offsetHeight,
    sectionTop = current.offsetTop - 58,
    sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
    }else{
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)

// Show Scroll Up
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// Dark Light Theme
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

//mengaktifkan / menonaktifkan tema secara manual denga tombol
themeButton.addEventListener('click', () => {
  // merubah icon tema
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  //menyimpan tema yg dipilih ke lokal
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})

// Scroll Reveal Anim
const anim = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: '2500',
  delay: '400'
})

anim.reveal('.home__title')
anim.reveal('.home__description', {delay: 500})
anim.reveal('.home__search', {delay: 600})
anim.reveal('.home__value', {delay: 700})
anim.reveal('.home__images', {delay: 800, origin: 'bottom'})
anim.reveal('.logo__img', {interval: 100})