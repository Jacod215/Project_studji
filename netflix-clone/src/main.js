import './scss/main.scss'

// Handle navigation background on scroll
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.classList.add('nav--scrolled');
  } else {
    nav.classList.remove('nav--scrolled');
  }
});

// Carousel functionality
class Carousel {
  constructor(element) {
    this.carousel = element;
    this.slides = this.carousel.querySelector('.hero__slider');
    this.prevBtn = this.carousel.querySelector('.hero__button--prev');
    this.nextBtn = this.carousel.querySelector('.hero__button--next');
    this.slideWidth = 0;
    this.currentPosition = 0;
    this.slidesPerView = window.innerWidth < 768 ? 2 : 4;
    
    this.init();
  }

  init() {
    this.updateSlideWidth();
    this.addEventListeners();
    window.addEventListener('resize', () => {
      this.updateSlideWidth();
      this.slidesPerView = window.innerWidth < 768 ? 2 : 4;
    });
  }

  updateSlideWidth() {
    const slide = this.carousel.querySelector('.hero__slide');
    if (slide) {
      this.slideWidth = slide.offsetWidth;
    }
  }

  addEventListeners() {
    this.prevBtn?.addEventListener('click', () => this.slide('prev'));
    this.nextBtn?.addEventListener('click', () => this.slide('next'));
  }

  slide(direction) {
    const slidesCount = this.carousel.querySelectorAll('.hero__slide').length;
    const maxPosition = -(slidesCount - this.slidesPerView) * this.slideWidth;

    if (direction === 'next') {
      this.currentPosition = Math.max(this.currentPosition - this.slideWidth, maxPosition);
    } else {
      this.currentPosition = Math.min(this.currentPosition + this.slideWidth, 0);
    }

    this.slides.style.transform = `translateX(${this.currentPosition}px)`;
  }
}

// Initialize carousels
document.querySelectorAll('.hero').forEach(carousel => {
  new Carousel(carousel);
});
