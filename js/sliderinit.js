import Slider from './slider.js';
import SliderInterface from './sliderinterface.js';

const slideContainer = document.querySelector(".slides-container");
const slides = slideContainer.querySelectorAll("li");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn"); 

const slidesPerPage = 4;
const slider = new Slider(slides, slidesPerPage);
const sliderInterface = new SliderInterface(prevBtn, nextBtn);

slider.addObserver(sliderInterface);
slider.showSlides();
  