export default function SlideshowFirstBoatJaktar() { 

	//variables
	let currentSlideIndexJaktar = 0;

	//query selectors
	const previousButton = document.querySelector('.main__previous-button-jaktar');
	const nextButton = document.querySelector('.main__next-button-jaktar');
	const boatJaktarSlides = document.querySelectorAll('.main__first-boat-jaktar-slides');
	const dotsJaktar = document.querySelectorAll('.main__dot-jaktar');

	//event listeners 
	previousButton.addEventListener('click', handlePreviousButton);
	nextButton.addEventListener('click', handleNextButton);
	window.addEventListener('keydown', handleKeydownJaktar);

	//event handlers 
	function handlePreviousButton() {
		decreaseCurrentIndex();
		renderHTMLJaktar();
	}

	function handleNextButton() {
		increaseCurrentIndex();
		renderHTMLJaktar();
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
	}	
}



