export default function SlideshowFirstBoatHallbergRassy() { 

	//variables
	let currentSlideIndexHallbergRassy = 0;
	let removeButtonsHallbergRassy = false;
	let visibleButtonArrowHallbergRassy = true;

	//query selectors
	const previousButtonHallbergRassy = document.querySelector('.main__previous-button-hallbergrassy');
	const nextButtonHallbergRassy = document.querySelector('.main__next-button-hallbergrassy');
	const boatHallbergRassySlides = document.querySelectorAll('.main__third-boat-hallbergrassy-slides');
	const dotsHallbergRassy = document.querySelectorAll('.main__dot-hallbergrassy');
	const boatHallbergRassyVisibleArrows = document.querySelector('.main__third-boat-hallbergrassy-button-slideshow');
	const boatHallbergRassyHidenArrows = document.querySelector('.main__third-boat-hallbergrassy-button-slideshow');
	const boatHallbergRassyVisiblePreviousArrowOverArrow = document.querySelector('.main__previous-button-hallbergrassy');
	const boatHallbergRassyVisibleNextArrowOverArrow = document.querySelector('.main__next-button-hallbergrassy');

	//event listeners 
	previousButtonHallbergRassy.addEventListener('click', handlePreviousButtonHallbergRassy);
	nextButtonHallbergRassy.addEventListener('click', handleNextButtonHallbergRassy);
	window.addEventListener('keydown', handleKeydownHallbergRassy);
	boatHallbergRassyVisibleArrows.addEventListener('mouseover', handleMouseOverHallbergRassy);
	boatHallbergRassyHidenArrows.addEventListener('mouseleave', handleMouseLeaveHallbergRassy);
	boatHallbergRassyVisiblePreviousArrowOverArrow.addEventListener('mouseover', handleMouseOverPreviousButtonHallbergRassy);
	boatHallbergRassyVisibleNextArrowOverArrow.addEventListener('mouseover', handleMouseOverNextButtonHallbergRassy);

	//event handlers 
	function handlePreviousButtonHallbergRassy(event) {
		decreaseCurrentIndexHallbergRassy();
		renderHTMLHallbergRassy();
	}

	function handleNextButtonHallbergRassy(event) {
		increaseCurrentIndexHallbergRassy();
		renderHTMLHallbergRassy();
	}

	function handleMouseOverHallbergRassy(event) {
		visibleArrowsHallbergRassy();
		renderHTMLHallbergRassy();
	}

	function handleMouseLeaveHallbergRassy(event) {
		visibleArrowsHallbergRassy();
		renderHTMLHallbergRassy();
	}

	function handleMouseOverPreviousButtonHallbergRassy(event) {
		visibleArrowsOverArrowsHallbergRassy();
		renderHTMLArrowsHallbergRassy();
	}

	function handleMouseOverNextButtonHallbergRassy(event) {
		visibleArrowsOverArrowsHallbergRassy();
		renderHTMLArrowsHallbergRassy();
	}

	//functions
	function decreaseCurrentIndexHallbergRassy() {

		if (currentSlideIndexHallbergRassy > 0) {
			currentSlideIndexHallbergRassy -= 1;
	  } else {
		  currentSlideIndexHallbergRassy = boatHallbergRassySlides.length -1;
	  }
	}

	//function to increase current index
	function increaseCurrentIndexHallbergRassy() {

		if (currentSlideIndexHallbergRassy < boatHallbergRassySlides.length -1) {
			currentSlideIndexHallbergRassy += 1;
		} else {
			currentSlideIndexHallbergRassy = 0;
		}
	}

	function visibleArrowsHallbergRassy() {
		removeButtonsHallbergRassy = !removeButtonsHallbergRassy;
	}

	function visibleArrowsOverArrowsHallbergRassy() {
		visibleButtonArrowHallbergRassy = !visibleButtonArrowHallbergRassy;
	}

	//change slides keyboard
	function handleKeydownHallbergRassy(event) {
	
		if (event.key === 'Arrowleft') {
			decreaseCurrentIndexHallbergRassy();
			renderHTMLHallbergRassy();

		} else if (event.key === 'Arrowright') {
			decreaseCurrentIndexHallbergRassy();
			renderHTMLHallbergRassy();
		}
	}

	//render function
	function renderHTMLHallbergRassy() {
		
		for (let indexHallbergRassy = 0; indexHallbergRassy < boatHallbergRassySlides.length; indexHallbergRassy += 1) {
			boatHallbergRassySlides[indexHallbergRassy].classList.remove('main__third-boat-hallbergrassy-slides--visible');	
		}

		for (let indexHallbergRassy = 0; indexHallbergRassy < dotsHallbergRassy.length; indexHallbergRassy += 1) {
			dotsHallbergRassy[indexHallbergRassy].classList.remove('main__dot-hallbergrassy--active');
		}
	
		boatHallbergRassySlides[currentSlideIndexHallbergRassy].classList.add('main__third-boat-hallbergrassy-slides--visible');
		dotsHallbergRassy[currentSlideIndexHallbergRassy].classList.add('main__dot-hallbergrassy--active');	

		if (removeButtonsHallbergRassy === true) {
			previousButtonHallbergRassy.style.display = 'block';
			nextButtonHallbergRassy.style.display = 'block';

		} else {
			previousButtonHallbergRassy.style.display = 'none';
			nextButtonHallbergRassy.style.display = 'none';;
		}
	}	

	function renderHTMLArrowsHallbergRassy() {
		if (visibleButtonArrowHallbergRassy === true) {
			boatHallbergRassyVisiblePreviousArrowOverArrow.style.display = 'block';
			boatHallbergRassyVisibleNextArrowOverArrow.style.display = 'block';
		} 
	}
}