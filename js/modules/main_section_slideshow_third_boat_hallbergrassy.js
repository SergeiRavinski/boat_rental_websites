export default function SlideshowFirstBoatHallbergRassy() { 

	//variables
	let currentSlideIndexHallbergRassy = 0;

	//query selectors
	const previousButtonHallbergRassy = document.querySelector('.main__previous-button-hallbergrassy');
	const nextButtonHallbergRassy = document.querySelector('.main__next-button-hallbergrassy');
	const boatHallbergRassySlides = document.querySelectorAll('.main__third-boat-hallbergrassy-slides');
	const dotsHallbergRassy = document.querySelectorAll('.main__dot-hallbergrassy');

	//event listeners 
	previousButtonHallbergRassy.addEventListener('click', handlePreviousButtonHallbergRassy);
	nextButtonHallbergRassy.addEventListener('click', handleNextButtonHallbergRassy);
	window.addEventListener('keydown', handleKeydownHallbergRassy);

	//event handlers 
	function handlePreviousButtonHallbergRassy() {
		decreaseCurrentIndexHallbergRassy();
		renderHTMLHallbergRassy();
	}

	function handleNextButtonHallbergRassy() {
		increaseCurrentIndexHallbergRassy();
		renderHTMLHallbergRassy();
	}

	//function to decrease current index
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
	}	
}