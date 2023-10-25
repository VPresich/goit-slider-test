class SliderInterface {
  constructor(elementsList, prevBtn, nextBtn) {
    this.prevBtn = prevBtn;
    this.nextBtn = nextBtn;
    this.elementsList = elementsList;
  }

  initBtnsFunction(slider) {
    this.prevBtn.addEventListener("click", () => {
      slider.onPrevSlide();
    });

    this.nextBtn.addEventListener("click", () => {
      slider.onNextSlide();
    });
  }

  update(slider) {
    this.updateOffsetList(slider);
    // this.updateDisplayList(slider);
    this.updateButtons(slider);
  }

  updateOffsetList(slider) {
    for (let i = 0; i < this.elementsList.length; i += 1) {
      const offset =
        slider.offsetSlide(i) * (this.elementsList[i].offsetWidth + 18);
      console.log(offset, this.elementsList[i].offsetWidth);
      this.elementsList[i].style.transform = `translateX(${offset}px)`;
    }
  }

  updateDisplayList(slider) {
    for (let i = 0; i < this.elementsList.length; i += 1) {
      if (slider.isDisplaySlide(i)) {
        this.elementsList[i].style.display = "block";
      } else {
        this.elementsList[i].style.display = "none";
      }
    }
  }

  updateButtons(slider) {
    this.prevBtn.disabled = slider.isExistPrev();
    this.nextBtn.disabled = slider.isExistNext();
  }
}

export default SliderInterface;
