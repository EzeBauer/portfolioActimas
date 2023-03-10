const $= (selector, type=null)=>{
  if(type=='all'){
    return document.querySelectorAll(selector);
  }
  return document.querySelector(selector);
}


// Nav hamburgerburger selections
const burger = $("#burger-menu");
const ul = $("nav ul");
const nav = $("nav");
const theme =$("#theme")
const submitForm = $(".submit-form")

// Scroll to top selection
const scrollUp = $("#scroll-up");

// Select nav links
const navLink = $(".nav-link", "all");

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

const sections=$("section", "all")
const footer= $("footer")
const h2= $("h2", "all")
const paragraphs= $(".copy", "all")


const themeDark= ()=>{
  document.body.style.backgroundColor= "black";
  $("#dl-icon").setAttribute("class", "bi bi-sun-fill");
   for (const title of h2) {
    title.style.color= "white"
  }
   for (const paragraph of paragraphs) {
    paragraph.style.color="white"
  }
   for (const section of sections) {
    section.style.backgroundColor="black"
  }
  footer.style.backgroundColor="black"
  
}

const themeLight= ()=>{
  document.body.style.backgroundColor= "white";
  $("#dl-icon").setAttribute("class", "bi bi-moon-fill");
  for (const title of h2) {
    title.style.color= "black"
  }
  for (const paragraph of paragraphs) {
    paragraph.style.color="black"
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



submitForm.addEventListener("mouseover", () => {
  submitForm.setAttribute("value", "Enviame ya, no dudes!!")
  
});
submitForm.addEventListener("mouseout", () => {
  submitForm.setAttribute("value", "Enviar");
});


