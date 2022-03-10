// Swiper initial
const swiper = new Swiper(".swiper", {
  loop: true,
  centeredSlides: true,
  grabCursor: true,
  slidesPerView: 2,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// LocomotiveScroll initial
const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  scrollFromAnywhere: true,
});

// Initial of elements

const accordionWrapper = document.querySelectorAll(".accordion-wrapper");
const accordion = document.querySelectorAll(".accordion");
const progressionBarWrapper = document.querySelectorAll(".progressionBar-wrapper__main");
const progressionBar = document.querySelectorAll(".progressionBar");

const sectionMe = document.querySelector("#Me");
const sectionSkills = document.querySelector("#Skills");
const sectionProjects = document.querySelector("#Projects");
const logoMe = document.querySelector(".left_sidebar--menu_me");
const logoSkills = document.querySelector(".left_sidebar--menu_skills");
const logoProjects = document.querySelector(".left_sidebar--menu_works");
const logosMenu = document.querySelectorAll(".logos-menu");
const inView = document.querySelectorAll("[data-scroll]");

// Animations

accordionWrapper.forEach((element) => {
  element.addEventListener("click", () => {
    const childrens = Array.from(element.children);
    childrens.forEach((e) => {
      e.classList.toggle("active");
    });
  });
});

scroll.on("scroll", () => {
  inView.forEach((e, i) => {
    detectInView(e, logosMenu[i], blurOff, blurOn);
  });
});

logoMe.addEventListener('click', ()=>{
  scroll.scrollTo("top");
})
logoSkills.addEventListener('click', ()=>{
  scroll.scrollTo(sectionSkills);
})
logoProjects.addEventListener('click', ()=>{
  scroll.scrollTo(sectionProjects);
})

// Functions

detectInView = (section, element, callback1, callback2) => {
  if (section.classList.contains("is-inview")) {
    callback1(element);
  } else {
    callback2(element);
  }
};

blurOff = (element) => {
  element.classList.add("blurOff");
};

blurOn = (element) => {
  element.classList.remove("blurOff");
};
