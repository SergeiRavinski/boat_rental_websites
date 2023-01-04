export default function SlideshowSecondBoatAxopar() { 

	//variables
	let currentSlideIndexAxopar = 0;

	//query selectors
	const previousButtonAxopar = document.querySelector('.main__previous-button-axopar');
	const nextButtonAxopar = document.querySelector('.main__next-button-axopar');
	const boatAxoparSlides = document.querySelectorAll('.main__second-boat-axopar-slides');
	const dotsAxopar = document.querySelectorAll('.main__dot-axopar');

	//event listeners 
	previousButtonAxopar.addEventListener('click', handlePreviousButtonAxopar);
	nextButtonAxopar.addEventListener('click', handleNextButtonAxopar);
	window.addEventListener('keydown', handleKeydownAxopar);

	//event handlers 
	function handlePreviousButtonAxopar() {
		decreaseCurrentIndexAxopar();
		renderHTMLAxopar();
	}

	function handleNextButtonAxopar() {
		increaseCurrentIndexAxopar();
		renderHTMLAxopar();
	}

	//function to decrease current index
	function decreaseCurrentIndexAxopar() {

		if (currentSlideIndexAxopar > 0) {
			currentSlideIndexAxopar -= 1;
	  } else {
		  currentSlideIndexAxopar = boatAxoparSlides.length -1;
	  }
	}

	//function to increase current index
	function increaseCurrentIndexAxopar() {

		if (currentSlideIndexAxopar < boatAxoparSlides.length -1) {
			currentSlideIndexAxopar += 1;
		} else {
			currentSlideIndexAxopar = 0;
		}
	}

	//change slides keyboard
	function handleKeydownAxopar(event) {

		if (event.key === 'Arrowleft') {
			decreaseCurrentIndexAxopar();
			renderHTMLAxopar();

		} else if (event.key === 'Arrowright') {
			decreaseCurrentIndexAxopar();
			renderHTMLAxopar();
		}
	}

	//render function
	function renderHTMLAxopar() {
		
		for (let indexAxopar = 0; indexAxopar < boatAxoparSlides.length; indexAxopar += 1) {
			boatAxoparSlides[indexAxopar].classList.remove('main__second-boat-axopar-slides--visible');	
		}

		for (let indexAxopar = 0; indexAxopar < dotsAxopar.length; indexAxopar += 1) {
			dotsAxopar[indexAxopar].classList.remove('main__dot-axopar--active');
		}
	
		boatAxoparSlides[currentSlideIndexAxopar].classList.add('main__second-boat-axopar-slides--visible');
		dotsAxopar[currentSlideIndexAxopar].classList.add('main__dot-axopar--active');	
	}
}
