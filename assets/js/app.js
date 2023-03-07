// Nav hamburgerburger selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

// Scroll to top selection
const scrollUp = document.querySelector("#scroll-up");

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

// Hamburger menu function
burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

// scroll to top functionality
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// change title

let tituloOriginal= document.title

window.addEventListener('blur', ()=>{
    document.title= "NO TE VAYAS!! VUELVE"
})
window.addEventListener('focus', ()=>{
    document.title= tituloOriginal
})

//change mode dark-light

let title2= document.querySelector(".bio-title")
let sesionAbout= document.querySelector(".more-about")
let sesionAboutTitle= document.querySelector(".h2About")
let sesionSkillsTitle= document.querySelector(".h2Skills")
let sesionProjectsTitle= document.querySelector(".h2Projects")
let sesionContactTitle= document.querySelector(".h2Contact")
let sesionAboutP= document.querySelector("p")
let projects= document.querySelector(".projects")
let projectsContainer= document.querySelector(".projects-container")
let footer= document.querySelector("footer")
let footerP= document.querySelector(".copy")

const themeDark= ()=>{
  document.body.style.backgroundColor= "black";
  document.querySelector("#dl-icon").setAttribute("class", "bi bi-sun-fill");
  title2.style.color= "white"
  sesionAbout.style.backgroundColor= "black"
  sesionAboutTitle.style.color= "white";
  sesionContactTitle.style.color= "white";
  sesionSkillsTitle.style.color= "white";
  sesionProjectsTitle.style.color= "white";
  sesionAboutP.style.color="white"
  projects.style.backgroundColor="black"
  projectsContainer.style.backgroundColor="black"
  footer.style.backgroundColor="black"
  footerP.style.color="white"
}

const themeLight= ()=>{
  document.body.style.backgroundColor= "white";
  document.querySelector("#dl-icon").setAttribute("class", "bi bi-moon-fill");
  title2.style.color= "black"
  sesionAbout.style.backgroundColor= "white"
  sesionAboutTitle.style.color= "black"
  sesionAboutP.style.color="black"
  sesionContactTitle.style.color= "black";
  sesionSkillsTitle.style.color= "black";
  sesionProjectsTitle.style.color= "black";
  projects.style.backgroundColor="white"
  projectsContainer.style.backgroundColor="white"
  footer.style.backgroundColor="white"
  footerP.style.color="black"
}

const changeTheme = ()=>{
  document.body.style.backgroundColor === "white"?
   themeDark() : themeLight()
}