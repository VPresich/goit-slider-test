
const slideContainer = document.querySelector(".slides-container");
const slides = slideContainer.querySelectorAll("li"); 
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

prevBtn.addEventListener("click", onPrevSlide);
nextBtn.addEventListener("click", onNextSlide);

let currentSlide = 0;
const slidesPerPage = 4;

  function showSlides() {   
    slides.forEach((slide, index) => {        
      if (index >= currentSlide && index < currentSlide + slidesPerPage) {      
        slide.style.display = "block";
      } else {       
        slide.style.display = "none";
      }
    });
  }

function onPrevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
  } 
  console.log("currentSlide:", currentSlide);
  showSlides();
}

function onNextSlide() {
  if (currentSlide < slides.length - slidesPerPage) {
    currentSlide += 1;    
  }
  console.log("currentSlide:", currentSlide);
  showSlides()
}
 function buttonsEnable()
 {  
    prevBtn.disabled = currentSlide === 0 || slides.length <= slidesPerPage;  
    nextBtn.disabled = currentSlide >= slides.length - slidesPerPage || slides.length <= slidesPerPage;
 }

showSlides();
