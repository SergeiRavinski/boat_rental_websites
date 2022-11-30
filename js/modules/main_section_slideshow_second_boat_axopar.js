export default function SlideshowSecondBoatAxopar() { 

	//variables
	let currentSlideIndexAxopar = 0;
	let removeButtonsAxopar = false;
	let visibleButtonArrowAxopar = true;

	//query selectors
	const previousButtonAxopar = document.querySelector('.main__previous-button-axopar');
	const nextButtonAxopar = document.querySelector('.main__next-button-axopar');
	const boatAxoparSlides = document.querySelectorAll('.main__second-boat-axopar-slides');
	const dotsAxopar = document.querySelectorAll('.main__dot-axopar');
	const boatAxoparVisibleArrows = document.querySelector('.main__second-boat-axopar-button-slideshow');
	const boatAxoparHidenArrows = document.querySelector('.main__second-boat-axopar-button-slideshow');
	const boatAxoparVisiblePreviousArrowOverArrow = document.querySelector('.main__previous-button-axopar');
	const boatAxoparVisibleNextArrowOverArrow = document.querySelector('.main__next-button-axopar');

	//event listeners 
	previousButtonAxopar.addEventListener('click', handlePreviousButtonAxopar);
	nextButtonAxopar.addEventListener('click', handleNextButtonAxopar);
	boatAxoparVisibleArrows.addEventListener('mouseover', handleMouseOverAxopar);
	boatAxoparHidenArrows.addEventListener('mouseleave', handleMouseLeaveAxopar);
	boatAxoparVisiblePreviousArrowOverArrow.addEventListener('mouseover', handleMouseOverPreviousButtonAxopar);
	boatAxoparVisibleNextArrowOverArrow.addEventListener('mouseover', handleMouseOverNextButtonAxopar);

	//event handlers 
	function handlePreviousButtonAxopar(event) {
		decreaseCurrentIndexAxopar();
		renderHTMLAxopar();
	}

	function handleNextButtonAxopar(event) {
		increaseCurrentIndexAxopar();
		renderHTMLAxopar();
	}

	function handleMouseOverAxopar(event) {
		visibleArrowsAxopar();
		renderHTMLAxopar();
	}

	function handleMouseLeaveAxopar(event) {
		visibleArrowsAxopar();
		renderHTMLAxopar();
	}

	function handleMouseOverPreviousButtonAxopar(event) {
		visibleArrowsOverArrowsAxopar();
		renderHTMLArrowsAxopar();
	}

	function handleMouseOverNextButtonAxopar(event) {
		visibleArrowsOverArrowsAxopar();
		renderHTMLArrowsAxopar();
	}

	//functions
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

	function visibleArrowsAxopar() {
		removeButtonsAxopar = !removeButtonsAxopar;
	}

	function visibleArrowsOverArrowsAxopar() {
		visibleButtonArrowAxopar = !visibleButtonArrowAxopar;
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

		if (removeButtonsAxopar === true) {
			previousButtonAxopar.style.display = 'block';
			nextButtonAxopar.style.display = 'block';

		} else {
			previousButtonAxopar.style.display = 'none';
			nextButtonAxopar.style.display = 'none';;
		}
	}
	
	function renderHTMLArrowsAxopar() {
		if (visibleButtonArrowAxopar === true) {
			boatAxoparVisiblePreviousArrowOverArrow.style.display = 'block';
			boatAxoparVisibleNextArrowOverArrow.style.display = 'block';
		} 
	}
}
