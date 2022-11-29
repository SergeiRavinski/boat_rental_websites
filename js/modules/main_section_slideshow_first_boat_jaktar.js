export default function SlideshowFirstBoatJaktar() { 

	//variables
	let currentSlideIndex = 0;

	//query selectors
	const previousButton = document.querySelector('.previous__button-jaktar');
	const nextButton = document.querySelector('.next__button-jaktar');
	const boatJaktarSlides = document.querySelectorAll('.first__boat--jaktar--slides');
	const dotsJaktar = document.querySelectorAll('.dot__jaktar');

	//event listeners 
	previousButton.addEventListener('click', handlePreviousButton);
	nextButton.addEventListener('click', handleNextButton);

	//event handlers 
	function handlePreviousButton(event) {
		decreaseCurrentIndex();
		renderHTML();
	}

	function handleNextButton(event) {
		increaseCurrentIndex();
		renderHTML();
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

	function renderHTML() {
		
		for (let index = 0; index < boatJaktarSlides.length; index += 1) {
			boatJaktarSlides[index].classList.remove('first__boat--jaktar--slides--visible');	
		}

		for (let index = 0; index < dotsJaktar.length; index += 1) {
			dotsJaktar[index].classList.remove('dot__jaktar--active');
		}
	
		boatJaktarSlides[currentSlideIndex].classList.add('first__boat--jaktar--slides--visible');
		dotsJaktar[currentSlideIndex].classList.add('dot__jaktar--active');	
	}	
}



