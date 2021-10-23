const slides = document.querySelectorAll('.slider__slide');
const slider = document.querySelector('.slider');
const prevBtn = document.querySelectorAll('.slider__button--prev');
const nextBtn = document.querySelectorAll('.slider__button--next');
let curSlide = 0;

const maxSlide = slides.length;

const goToSlide = (slide) => {
	slides.forEach((el, i) => {
		el.style.transform = `translate(${100 * (i - slide)}%, -50%)`;
	});
};

const nextSlide = () => {
	if (curSlide === maxSlide - 1) {
		curSlide = 0;
	} else {
		curSlide++;
	}
	goToSlide(curSlide);
};

const prevSlide = () => {
	if (curSlide === 0) {
		curSlide = maxSlide - 1;
	} else {
		curSlide--;
	}
	goToSlide(curSlide);
};

goToSlide(0);

prevBtn.forEach((btn) => {
	btn.addEventListener('click', prevSlide);
});

nextBtn.forEach((btn) => {
	btn.addEventListener('click', nextSlide);
});
