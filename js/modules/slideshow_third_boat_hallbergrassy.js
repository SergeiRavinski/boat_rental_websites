export default function SlideshowFirstBoatHallbergRassy() { 

	//variables
	let currentSlideIndexHallbergRassy = 0;

	//query selectors
	const previousButtonHallbergRassy = document.querySelector('#previous__button-hallbergrassy');
	const nextButtonHallbergRassy = document.querySelector('#next__button-hallbergrassy');
	const boatHallbergRassySlides = document.querySelectorAll('.third__boat--hallbergrassy--slides');
	const dotsHallbergRassy = document.querySelectorAll('.dot__hallbergrassy');

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
			boatHallbergRassySlides[indexHallbergRassy].classList.remove('third__boat--hallbergrassy--slides--visible');	
		}

		for (let indexHallbergRassy = 0; indexHallbergRassy < dotsHallbergRassy.length; indexHallbergRassy += 1) {
			dotsHallbergRassy[indexHallbergRassy].classList.remove('dot__hallbergrassy--active');
		}
	
		boatHallbergRassySlides[currentSlideIndexHallbergRassy].classList.add('third__boat--hallbergrassy--slides--visible');
		dotsHallbergRassy[currentSlideIndexHallbergRassy].classList.add('dot__hallbergrassy--active');	
	}	
}