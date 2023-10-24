class SliderInterface {
    constructor(prevBtn, nextBtn) {
      this.prevBtn = prevBtn;
      this.nextBtn = nextBtn;
    }
  
    init(slider) {
      this.prevBtn.addEventListener('click', () => {
        slider.onPrevSlide();
      });
  
      this.nextBtn.addEventListener('click', () => {
        slider.onNextSlide();
      });
    }
  
    update(slider) {
      this.prevBtn.disabled = slider.currentSlide === 0 || slider.slides.length <= slider.slidesPerPage;
      this.nextBtn.disabled = slider.currentSlide >= slider.slides.length - slider.slidesPerPage || slider.slides.length <= slider.slidesPerPage;
    }
  }
  
  export default SliderInterface;