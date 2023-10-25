class SliderInterface {  

  constructor(sliderRef, elementsList, prevBtn, nextBtn) {
    this.prevBtn = prevBtn;
    this.nextBtn = nextBtn;
    this.elementsList = elementsList;
    this.sliderRef = sliderRef;
    this.initBtnsFunction();
    this.update();
  }

  initBtnsFunction() {
    this.prevBtn.addEventListener("click", () => {
      this.sliderRef.onPrevSlide();
      this.update();
    });

    this.nextBtn.addEventListener("click", () => {
      this.sliderRef.onNextSlide();
      this.update();
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
        this.sliderRef.getOffsetSlide(i) * (this.elementsList[i].offsetWidth + 18);
        console.log("offset: ", "i =",  i, offset);
      this.elementsList[i].style.transform = `translateX(${offset}px)`;
    }
  }

  updateDisplayList() {
    for (let i = 0; i < this.elementsList.length; i += 1) {
      if (this.sliderRef.isDisplaySlide(i)) {
        this.elementsList[i].style.display = "block";
      } else {
        this.elementsList[i].style.display = "none";
      }
    }
  }

  updateButtons() {
    this.prevBtn.disabled = this.sliderRef.isExistPrev();
    this.nextBtn.disabled = this.sliderRef.isExistNext();
  }
}

export default SliderInterface;
