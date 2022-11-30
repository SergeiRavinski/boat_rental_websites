export default function SlideshowFirstBoatJaktar() { 

	//variables
	let currentSlideIndex = 0;

	//query selectors
	const previousButton = document.querySelector('.main__previous-button-jaktar');
	const nextButton = document.querySelector('.main__next-button-jaktar');
	const boatJaktarSlides = document.querySelectorAll('.main__first-boat-jaktar-slides');
	const dotsJaktar = document.querySelectorAll('.main__dot-jaktar');

	//event listeners 
	previousButton.addEventListener('click', handlePreviousButton);
	nextButton.addEventListener('click', handleNextButton);

	//event handlers 
	function handlePreviousButton(event) {
		decreaseCurrentIndex();
		renderHTMLJaktar();
	}

	function handleNextButton(event) {
		increaseCurrentIndex();
		renderHTMLJaktar();
	}

	//functions
	function decreaseCurrentIndex() {

		if (currentSlideIndex > 0) {
			currentSlideIndex -= 1;
	  } else {
		  currentSlideIndex = boatJaktarSlides.length -1;
	  }
	}

	function increaseCurrentIndex() {

		if (currentSlideIndex < boatJaktarSlides.length -1) {
			currentSlideIndex += 1;
		} else {
			currentSlideIndex = 0;
		}
	}

	function renderHTMLJaktar() {
		
		for (let index = 0; index < boatJaktarSlides.length; index += 1) {
			boatJaktarSlides[index].classList.remove('main__first-boat-jaktar-slides--visible');	
		}

		for (let index = 0; index < dotsJaktar.length; index += 1) {
			dotsJaktar[index].classList.remove('main__dot-jaktar--active');
		}
	
		boatJaktarSlides[currentSlideIndex].classList.add('main__first-boat-jaktar-slides--visible');
		dotsJaktar[currentSlideIndex].classList.add('main__dot-jaktar--active');	
	}	
}



