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
    this.updateList(slider);
    this.updateButtons(slider);
  }

  updateList(slider) {
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
