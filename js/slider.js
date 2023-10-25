class Slider { 
  #currentSlide = 0;
  #slidesPerPage = 1;
  #slidesNumber = 0;
  #slides = [{}];
  constructor(slidesPerPage, slidesNumber = 0) {
    this.#slidesPerPage = slidesPerPage;
    this.#slidesNumber = slidesNumber;
    this.#slides = Array.from({ length: slidesNumber }, () => ({
      display: false,
      offset: 0,
    }));
    this.setSlidesProperty();
  }  

  set slidesPerPage(newSlidesPerPage) {
    this.#slidesPerPage = newSlidesPerPage;
  }

  get slidesPerPage() {
    return this.#slidesPerPage;
  }

  setSlidesProperty() {
    this.#slides.forEach((slide, index) => {
      if (
        index >= this.#currentSlide &&
        index < this.#currentSlide + this.#slidesPerPage
      ) {
        slide.display = true;
      } else {
        slide.display = false;
      }
    });    
  }

  onPrevSlide() {
    if (this.#currentSlide > 0) {
      this.#currentSlide--;
      this.#slides.forEach((slide, index) => {
        slide.offset += 1;
      });
    }   
    this.setSlidesProperty();
  }

  onNextSlide() {
    if (this.#currentSlide < this.#slidesNumber - this.#slidesPerPage) {
      this.#currentSlide += 1;
      this.#slides.forEach((slide, index) => {
        slide.offset -= 1;
      });
    }  
    this.setSlidesProperty();
  }

  isExistNext() {
    return (
      this.#currentSlide >= this.#slidesNumber - this.#slidesPerPage ||
      this.#slidesNumber <= this.#slidesPerPage
    );
  }

  isExistPrev() {
    return (
      this.#currentSlide === 0 || this.#slidesNumber <= this.#slidesPerPage
    );
  }

  isDisplaySlide(index) {
    return this.#slides[index].display;
  }

  getOffsetSlide(index) {
    return this.#slides[index].offset;
  }
}

export default Slider;
