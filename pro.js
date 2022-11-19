const scrollHeader = () => {
  const header = document.getElementById('header')
  this.scrollY >= 50 ? header.classList.add('bg-header')
    : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up')
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
    : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id'),
      sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link')
    } else {
      sectionsClass.classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
})

sr.reveal(`.home__img, .newsletter__container, 
  .footer__logo, .footer__description, 
   .footer__content, .footer__info`)
sr.reveal(`.home__data`, { origin: 'bottom' })
sr.reveal(`.about__data, .recently__data`, { origin: 'left' })
sr.reveal(`.about__img, .recently__img`, { origin: 'right' })
sr.reveal(`.features__card`, { interval: 100 })

var mySong = document.getElementById("mySong");
var icon = document.getElementById("icon");

icon.onclick = function () {
  if (mySong.paused) {
    mySong.play();
    button.src = "ri-play-circle-line";
  }
  else {
    mySong.pause();
    button.src = "ri-pause-circle-line";
  }
}