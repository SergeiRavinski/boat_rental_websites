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

	//event handlers 
	function handlePreviousButtonHallbergRassy(event) {
		decreaseCurrentIndexHallbergRassy();
		renderHTMLHallbergRassy();
	}

	function handleNextButtonHallbergRassy(event) {
		increaseCurrentIndexHallbergRassy();
		renderHTMLHallbergRassy();
	}

	//functions
	function decreaseCurrentIndexHallbergRassy() {

		if (currentSlideIndexHallbergRassy > 0) {
			currentSlideIndexHallbergRassy -= 1;
	  } else {
		  currentSlideIndexHallbergRassy = boatHallbergRassySlides.length -1;
	  }
	}

	function increaseCurrentIndexHallbergRassy() {

		if (currentSlideIndexHallbergRassy < boatHallbergRassySlides.length -1) {
			currentSlideIndexHallbergRassy += 1;
		} else {
			currentSlideIndexHallbergRassy = 0;
		}
	}

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