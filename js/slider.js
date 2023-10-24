class Slider {
    constructor(slides, slidesPerPage) {
      this.slides = slides;
      this.slidesPerPage = slidesPerPage;
      this.currentSlide = 0;      
      this.observers = [];
    }

    addObserver(observer) {
      this.observers.push(observer);
    }

    notifyObservers() {
      this.observers.forEach(observer => observer.update(this));      
    }

    showSlides() {
      this.slides.forEach((slide, index) => {
        if (index >= this.currentSlide && index < this.currentSlide + this.slidesPerPage) {
          slide.style.display = 'block';
        } else {
          slide.style.display = 'none';
        }
      });
    }
  
    onPrevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--;
      }
      console.log('currentSlide:', this.currentSlide);
      this.showSlides();
    }
  
    onNextSlide() {
      if (this.currentSlide < this.slides.length - this.slidesPerPage) {
        this.currentSlide += 1;
      }
      console.log('currentSlide:', this.currentSlide);
      this.showSlides();
    }
  }
  
  export default Slider;