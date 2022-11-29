export default function SlideshowSecondBoatAxopar() { 

	//variables
	let currentSlideIndexAxopar = 0;

	//query selectors
	const previousButtonAxopar = document.querySelector('.previous__button-axopar');
	const nextButtonAxopar = document.querySelector('.next__button-axopar');
	const boatAxoparSlides = document.querySelectorAll('.second__boat--axopar--slides');
	const dotsAxopar = document.querySelectorAll('.dot__axopar');

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
			boatAxoparSlides[indexAxopar].classList.remove('second__boat--axopar--slides--visible');	
		}

		for (let indexAxopar = 0; indexAxopar < dotsAxopar.length; indexAxopar += 1) {
			dotsAxopar[indexAxopar].classList.remove('dot__axopar--active');
		}
	
		boatAxoparSlides[currentSlideIndexAxopar].classList.add('second__boat--axopar--slides--visible');
		dotsAxopar[currentSlideIndexAxopar].classList.add('dot__axopar--active');	
	}	
}
