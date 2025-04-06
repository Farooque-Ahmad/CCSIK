document.addEventListener('DOMContentLoaded', function () {
const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");
      let getMode = localStorage.getItem("mode");
          if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
          }
// js code to toggle dark and light mode
      modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");
        // js code to keep user selected mode even page refresh or file reopen
        if(!body.classList.contains("dark")){
            localStorage.setItem("mode" , "light-mode");
        }else{
            localStorage.setItem("mode" , "dark-mode");
        }
      });
// js code to toggle search box
        searchToggle.addEventListener("click" , () =>{
        searchToggle.classList.toggle("active");
      });
 
      
//   js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});
body.addEventListener("click" , e =>{
    let clickedElm = e.target;
    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});



// Smooth Scroll for Navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetId);
    window.scrollTo({
      top: targetElement.offsetTop - 80,
      behavior: 'smooth'
    });
  });
});


const heroButton = document.querySelector('.hero button');
const modal = document.createElement('div');
modal.className = 'modal';
modal.innerHTML = `
  <div class="modal-content">
    <span class="close-btn">&times;</span>
    <h2>Share Your Memories</h2>
    <textarea placeholder="Write about your favorite school memory..."></textarea>
    <button class="submit-memory">Submit</button>
  </div>
`;
document.body.appendChild(modal);

heroButton.addEventListener('click', () => {
  modal.style.display = 'block';
});

document.querySelector('.close-btn').addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close Modal on Outside Click
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Display Animation on Scroll
const sections = document.querySelectorAll('section');
const options = {
  threshold: 0.1
};

const revealSection = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('reveal');
    observer.unobserve(entry.target);
  });
}, options);

sections.forEach(section => {
  revealSection.observe(section);
});



// Comment Section
document.getElementById("commentForm").addEventListener("submit", function(event) {
event.preventDefault();
const commentText = document.getElementById("commentText").value;
if (commentText) {
  const commentElement = document.createElement("p");
  commentElement.textContent = commentText;
  document.getElementById("commentsList").appendChild(commentElement);
  document.getElementById("commentText").value = "";
}
});



/// Light/Dark Mode Toggle
// document.getElementById("theme-toggle").addEventListener("click", function () {

// document.body.classList.toggle("dark-mode");


// const currentTheme = document.body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";

// document.getElementById("theme-toggle").textContent = ` ${currentTheme}`;

// const textElements = document.querySelectorAll("h1, h2, h3, p, textarea, .card h3, .card p");
// const textColor = document.body.classList.contains("dark-mode") ? "white" : "black";
// const textareaBackgroundColor = document.body.classList.contains("dark-mode") ? "#555" : "white";

// textElements.forEach((element) => {
//   element.style.color = textColor;
// });

// const textareas = document.querySelectorAll("textarea");
// textareas.forEach((textarea) => {
//   textarea.style.backgroundColor = textareaBackgroundColor;
//   textarea.style.borderColor = document.body.classList.contains("dark-mode") ? "#777" : "#ccc";
// });

// const cards = document.querySelectorAll(".card");
// cards.forEach((card) => {
//   card.style.backgroundColor = document.body.classList.contains("dark-mode") ? "#444" : "#f9f9f9";
// });
// });

});

// Function to scroll back to the top of the page
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // This ensures a smooth scrolling effect
  });
}



var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});




var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


