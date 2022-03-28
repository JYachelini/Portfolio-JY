// Swiper initial
const swiper = new Swiper('.swiper', {
  loop: true,
  centeredSlides: true,
  grabCursor: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    652: {
      slidesPerView: 2,
    },
  },
})

// LocomotiveScroll initial
const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  scrollFromAnywhere: true,
})

// Initial of elements

const accordionWrapper = document.querySelectorAll('.accordion-wrapper')
const accordion = document.querySelectorAll('.accordion')

const sectionMe = document.querySelector('#Me')
const sectionSkills = document.querySelector('#Skills')
const sectionProjects = document.querySelector('#Projects')
const logoMe = document.querySelector('.left_sidebar--menu_me')
const logoSkills = document.querySelector('.left_sidebar--menu_skills')
const logoProjects = document.querySelector('.left_sidebar--menu_works')
const logosMenu = document.querySelectorAll('.logos-menu')
const inView = document.querySelectorAll('[data-scroll]')

const buttonMobile = document.querySelector('.openMenu-mobile')
const arrow = document.querySelector('.arrow')

// Animations

accordionWrapper.forEach((element) => {
  element.addEventListener('click', () => {
    const childrens = Array.from(element.children)
    childrens.forEach((e) => {
      e.classList.toggle('active')
    })
  })
})

scroll.on('scroll', () => {
  inView.forEach((e, i) => {
    detectInView(e, logosMenu[i], blurOff, blurOn)
  })
})

// setInterval(() => {
//   arrow.classList.toggle('running')
// }, 5000);

// Functions

detectInView = (section, element, callback1, callback2) => {
  if (section.classList.contains('is-inview')) {
    callback1(element)
  } else {
    callback2(element)
  }
}

blurOff = (element) => {
  element.classList.add('blurOff')
}

blurOn = (element) => {
  element.classList.remove('blurOff')
}

// EventListener scrollTo
logoMe.addEventListener('click', () => {
  scroll.scrollTo('top')
})
logoSkills.addEventListener('click', () => {
  scroll.scrollTo(sectionSkills)
})
logoProjects.addEventListener('click', () => {
  scroll.scrollTo(sectionProjects)
})

// Progression bar
const HTMLCSS = 80
const JS = 80
const REACT = 60
const FrontEnd = (HTMLCSS + JS + REACT) / 3
const totalFront = [FrontEnd, HTMLCSS, JS, REACT]

const MongoDB = 0
const Express = 0
const NodeJS = 0
const BackEnd = (MongoDB, Express, NodeJS) / 3
const totalBack = [BackEnd, MongoDB, Express, NodeJS]

const progressionBarWrapper = document.querySelectorAll('.progressionBar-wrapper__main')
const progressionBar = document.querySelectorAll('.progressionBar') // 0 = FrontEnd, 1 = HTML CSS, 2 = JS, 3 = React, 4 = Backend, 5 = Mongo, 6 = Express, 7 = Node

totalFront.forEach((e, i) => {
  progressionBar[i].style.width = e + '%'
})

totalBack.forEach((e, i) => {
  progressionBar[i + 4].style.width = e + '%'
})
