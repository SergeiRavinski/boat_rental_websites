export default function SlideshowFirstBoatJaktar() { 

	//variables
	let currentSlideIndexJaktar = 0;
	let removeButtonsJaktar = false;
	let visibleButtonArrowJaktar = true;

	//query selectors
	const previousButton = document.querySelector('.main__previous-button-jaktar');
	const nextButton = document.querySelector('.main__next-button-jaktar');
	const boatJaktarSlides = document.querySelectorAll('.main__first-boat-jaktar-slides');
	const dotsJaktar = document.querySelectorAll('.main__dot-jaktar');
	const boatJaktarVisibleArrows = document.querySelector('.main__first-boat-jaktar-button-slideshow');
	const boatJaktarHidenArrows = document.querySelector('.main__first-boat-jaktar-button-slideshow');
	const boatJaktarVisiblePreviousArrowOverArrow = document.querySelector('.main__previous-button-jaktar');
	const boatJaktarVisibleNextArrowOverArrow = document.querySelector('.main__next-button-jaktar');

	//event listeners 
	previousButton.addEventListener('click', handlePreviousButton);
	nextButton.addEventListener('click', handleNextButton);
	window.addEventListener('keydown', handleKeydownJaktar);
	boatJaktarVisibleArrows.addEventListener('mouseover', handleMouseOverJaktar);
	boatJaktarHidenArrows.addEventListener('mouseleave', handleMouseLeaveJaktar);
	boatJaktarVisiblePreviousArrowOverArrow.addEventListener('mouseover', handleMouseOverPreviousButtonJaktar);
	boatJaktarVisibleNextArrowOverArrow.addEventListener('mouseover', handleMouseOverNextButtonJaktar);

	//event handlers 
	function handlePreviousButton(event) {
		decreaseCurrentIndex();
		renderHTMLJaktar();
	}

	function handleNextButton(event) {
		increaseCurrentIndex();
		renderHTMLJaktar();
	}

	function handleMouseOverJaktar(event) {
		visibleArrows();
		renderHTMLJaktar();
	}

	function handleMouseLeaveJaktar(event) {
		visibleArrows();
		renderHTMLJaktar();
	}

	function handleMouseOverPreviousButtonJaktar(event) {
		visibleArrowsOverArrows();
		renderHTMLArrowsJaktar();
	}

	function handleMouseOverNextButtonJaktar(event) {
		visibleArrowsOverArrows();
		renderHTMLArrowsJaktar();
	}

	//function to decrease current index
	function decreaseCurrentIndex() {

		if (currentSlideIndexJaktar > 0) {
			currentSlideIndexJaktar -= 1;
	  } else {
		  currentSlideIndexJaktar = boatJaktarSlides.length -1;
	  }
	}

	//function to increase current index
	function increaseCurrentIndex() {

		if (currentSlideIndexJaktar < boatJaktarSlides.length -1) {
			currentSlideIndexJaktar += 1;
		} else {
			currentSlideIndexJaktar = 0;
		}
	}

	function visibleArrows() {
		removeButtonsJaktar = !removeButtonsJaktar;
	}

	function visibleArrowsOverArrows() {
		visibleButtonArrowJaktar = !visibleButtonArrowJaktar;
	}

	//change slides keyboard
	function handleKeydownJaktar(event) {

		if (event.key === 'ArrowLeft') {
			decreaseCurrentIndex();
			renderHTMLJaktar();
	
		} else if (event.key === 'ArrowRight') {
			increaseCurrentIndex();
			renderHTMLJaktar();
		}
	}

	//render function
	function renderHTMLJaktar() {
		
		for (let index = 0; index < boatJaktarSlides.length; index += 1) {
			boatJaktarSlides[index].classList.remove('main__first-boat-jaktar-slides--visible');	
		}

		for (let index = 0; index < dotsJaktar.length; index += 1) {
			dotsJaktar[index].classList.remove('main__dot-jaktar--active');
		}
	
		boatJaktarSlides[currentSlideIndexJaktar].classList.add('main__first-boat-jaktar-slides--visible');
		dotsJaktar[currentSlideIndexJaktar].classList.add('main__dot-jaktar--active');
		
		if (removeButtonsJaktar === true) {
			previousButton.style.display = 'block';
			nextButton.style.display = 'block';

		} else {
			previousButton.style.display = 'none';
			nextButton.style.display = 'none';
		}
	}	

	//show buttons previous and next on hover
	function renderHTMLArrowsJaktar() {
		if (visibleButtonArrowJaktar === true) {
			boatJaktarVisiblePreviousArrowOverArrow.style.display = 'block';
			boatJaktarVisibleNextArrowOverArrow.style.display = 'block';
		} 
	}
}



