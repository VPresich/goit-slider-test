import Slider from "./slider.js";
import SliderInterface from "./sliderinterface.js";

const refs = {
  slidesList: document
    .querySelector(".slides-container")
    .querySelectorAll("li"),
  prevBtn: document.getElementById("prevBtn"),
  nextBtn: document.getElementById("nextBtn"),
};

window.addEventListener("resize", () => {
  slidesPerPage = calculateSlidesPerPage();
  slider.setSlidesPerPage(slidesPerPage);
  slider.setSlidesProperty();
});

let slidesPerPage = calculateSlidesPerPage();
let slider = new Slider(slidesPerPage, refs.slidesList.length);

const sliderInterface = new SliderInterface(
  refs.slidesList,
  refs.prevBtn,
  refs.nextBtn
);

slider.addObserver(sliderInterface);
sliderInterface.initBtnsFunction(slider);
slider.setSlidesProperty();

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
