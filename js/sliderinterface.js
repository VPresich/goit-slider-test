class SliderInterface {

  static touchThreshold = 50;
  #sliderRef;
  constructor(sliderRef, elementsList, prevBtn, nextBtn, sliderContainer) {
    this.#sliderRef = sliderRef;
    this.elementsList = elementsList;
    this.prevBtn = prevBtn;
    this.nextBtn = nextBtn;
    this.sliderContainer = sliderContainer;    
    this.initBtnsFunction();
    this.initTouchFunction();
    this.update();
  }

  initBtnsFunction() {
    this.prevBtn.addEventListener("click", () => {
      this.#sliderRef.onPrevSlide();
      this.update();
    });

    this.nextBtn.addEventListener("click", () => {
      this.#sliderRef.onNextSlide();
      this.update();
    });
  }

  initTouchFunction() {    
    let startX = 0;
  
    this.sliderContainer.addEventListener("touchstart", (event) => {
      startX = event.touches[0].clientX;
    });
  
    this.sliderContainer.addEventListener("touchmove", (event) => {
      const currentX = event.touches[0].clientX;
      const deltaX = startX - currentX;
  
      if (deltaX > SliderInterface.touchThreshold) { 
        this.#sliderRef.onNextSlide();
        this.update();
        startX = currentX;

      } else if (deltaX < -SliderInterface.touchThreshold) { 
        this.#sliderRef.onPrevSlide();
        this.update();
        startX = currentX;
      }
    });
  }

  update() {
    this.updateOffsetList();
    // this.updateDisplayList(slider);
    this.updateButtons();
  }

  updateOffsetList() {
    for (let i = 0; i < this.elementsList.length; i += 1) {
      const offset =
        this.#sliderRef.getOffsetSlide(i) * (this.elementsList[i].offsetWidth + 18);        
      this.elementsList[i].style.transform = `translateX(${offset}px)`;
    }
  }

  updateDisplayList() {
    for (let i = 0; i < this.elementsList.length; i += 1) {
      if (this.#sliderRef.isDisplaySlide(i)) {
        this.elementsList[i].style.display = "block";
      } else {
        this.elementsList[i].style.display = "none";
      }
    }
  }

  updateButtons() {
    this.prevBtn.disabled = this.#sliderRef.isExistPrev();
    this.nextBtn.disabled = this.#sliderRef.isExistNext();
  }
}

export default SliderInterface;
