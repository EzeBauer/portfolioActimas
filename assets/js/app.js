// Nav hamburgerburger selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");
const theme =document.querySelector("#theme")

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

const sections=document.querySelectorAll("section")
const footer= document.querySelector("footer")
const h2= document.querySelectorAll("h2")
const parrafos= document.querySelectorAll(".copy")

const themeDark= ()=>{
  document.body.style.backgroundColor= "black";
  document.querySelector("#dl-icon").setAttribute("class", "bi bi-sun-fill");
   for (const titulo of h2) {
    titulo.style.color= "white"
  }
   for (const parrafo of parrafos) {
    parrafo.style.color="white"
  }
   for (const section of sections) {
    section.style.backgroundColor="black"
  }
  footer.style.backgroundColor="black"
  
}

const themeLight= ()=>{
  document.body.style.backgroundColor= "white";
  document.querySelector("#dl-icon").setAttribute("class", "bi bi-moon-fill");
  for (const titulo of h2) {
    titulo.style.color= "black"
  }
  for (const parrafo of parrafos) {
    parrafo.style.color="black"
  }
  for (const section of sections) {
    section.style.backgroundColor="white"
  }
  footer.style.backgroundColor="white"
  
}

theme.addEventListener("click", () => {
  document.body.style.backgroundColor === "white"?
  themeDark() : themeLight()
});
/* const changeTheme = ()=>{
  
} */