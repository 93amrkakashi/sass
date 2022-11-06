const section = document.querySelector(".skills");
const spans = document.querySelectorAll(".progress span");
let switchs = document.querySelector(".menu");
let link = document.querySelector(".links");
let navBar = document.getElementById("nav");

// loader on page loads
const loader = document.querySelector(".loader");
function load() {
  loader.style.display = "none";
}
window.addEventListener("load", load);

// toggle to mobile preview
console.log(switchs);
function switching() {
  link.classList.toggle("mobile");
}
switchs.addEventListener("click", switching);

// change width of skills

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 300) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  } else {
    spans.forEach((span) => {
      span.style.width = 0;
    });
  }
};

let cards = document.querySelectorAll(".card1");
let sections = document.querySelectorAll(".section");
console.log(sections);

window.addEventListener("scroll", checkSections);

checkSections();

function checkSections() {
  let trigerBottom = (window.innerHeight / 3) * 2;

  // console.log(trigerBottom);
  sections.forEach((section) => {
    let secTop = section.getBoundingClientRect().top;

    if (secTop < trigerBottom) {
      console.log("show");
      section.classList.add("show");
    } else {
      console.log("not show");
      section.classList.remove("show");
    }
  });
}




