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

	//event handlers 
	function handlePreviousButtonAxopar(event) {
		decreaseCurrentIndexAxopar();
		renderHTMLAxopar();
	}

	function handleNextButtonAxopar(event) {
		increaseCurrentIndexAxopar();
		renderHTMLAxopar();
	}

	//functions
	function decreaseCurrentIndexAxopar() {

		if (currentSlideIndexAxopar > 0) {
			currentSlideIndexAxopar -= 1;
	  } else {
		  currentSlideIndexAxopar = boatAxoparSlides.length -1;
	  }
	}

	function increaseCurrentIndexAxopar() {

		if (currentSlideIndexAxopar < boatAxoparSlides.length -1) {
			currentSlideIndexAxopar += 1;
		} else {
			currentSlideIndexAxopar = 0;
		}
	}

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
