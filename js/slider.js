class Slider {
  #observers = [];
  #currentSlide = 0;
  #slidesPerPage = 1;
  #slidesNumber = 0;
  constructor(slidesPerPage, slidesNumber = 0) {
    this.#slidesPerPage = slidesPerPage;
    this.#slidesNumber = slidesNumber;
    this.slides = Array.from({ length: slidesNumber }, () => ({
      display: false,
    }));
  }

  addObserver(observer) {
    this.#observers.push(observer);
  }

  setSlidesPerPage(newslidesPerPage) {
    this.#slidesPerPage = newslidesPerPage;
  }

  notifyObservers() {
    this.#observers.forEach((observer) => observer.update(this));
  }

  setSlidesProperty() {
    this.slides.forEach((slide, index) => {
      if (
        index >= this.#currentSlide &&
        index < this.#currentSlide + this.#slidesPerPage
      ) {
        slide.display = true;
      } else {
        slide.display = false;
      }
    });
    this.notifyObservers();
  }

  onPrevSlide() {
    if (this.#currentSlide > 0) {
      this.#currentSlide--;
    }
    this.setSlidesProperty();
  }

  onNextSlide() {
    if (this.#currentSlide < this.#slidesNumber - this.#slidesPerPage) {
      this.#currentSlide += 1;
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
    return this.slides[index].display;
  }
}

export default Slider;
