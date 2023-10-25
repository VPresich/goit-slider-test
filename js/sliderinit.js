import Slider from "./slider.js";
import SliderInterface from "./sliderinterface.js";

const refs = {
  slidesList: document
    .querySelector(".slides-container")
    .querySelectorAll("li"),
  prevBtn: document.getElementById("prevBtn"),
  nextBtn: document.getElementById("nextBtn"),
};

let slidesPerPage = calculateSlidesPerPage();
const sliderRef = new Slider(slidesPerPage, refs.slidesList.length);
const sliderInterface = new SliderInterface(sliderRef,
  refs.slidesList,
  refs.prevBtn,
  refs.nextBtn
);

window.addEventListener("resize", () => {
  slidesPerPage = calculateSlidesPerPage();
  sliderRef.slidesPerPage = slidesPerPage;
  sliderRef.setSlidesProperty();
  sliderInterface.update();
});


function calculateSlidesPerPage() {
  let res = 1;
  if (window.innerWidth >= 768) {
    res = 2;
  }
  if (window.innerWidth >= 1168) {
    res = 4;
  }
  return res;
}
