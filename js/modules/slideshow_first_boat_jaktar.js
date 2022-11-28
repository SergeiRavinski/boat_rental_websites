export default function SlideshowFirstBoatJaktar() { 
	//changed name for export

	//variables
	let currentIndex = 0;

	//query selectors
	const previousButton = document.querySelector('#previous__button');
	const nextButton = document.querySelector('#next__button');
	const boatJaktarSlides = document.querySelectorAll('.first__boat--jaktar--slides');
	const dotsJaktar = document.querySelectorAll('.dot__jaktar');

	//event listeners 
	previousButton.addEventListener('click', handlePreviousButton);
	nextButton.addEventListener('click', handleNextButton);

	//event handlers 
	function handlePreviousButton(event) {
		decreaseCurrentIndex();
		updateSlides();
		updateDots();
	}

	function handleNextButton(event) {
		increaseCurrentIndex();
		updateSlides();
		updateDots();
	}

	//functions
	function decreaseCurrentIndex() {
		//if (currentIndex <= boatJaktarSlides.length) {
		//	currentIndex -= 1;
		//}
		//else {
		//	currentIndex = boatJaktarSlides.length;
		//}
	}

	function increaseCurrentIndex() {

		if (currentIndex > boatJaktarSlides.length -1) {
			currentIndex += 1;
	  } else {
		  currentIndex = 0;
	  }
	}

	function updateSlides() {
		
		for (index = 0; index < boatJaktarSlides.length; index += 1) {
			boatJaktarSlides[index].classList.remove('first__boat--jaktar--slides');
		}
	
		boatJaktarSlides[currentIndex].classList.add('first__boat--jaktar--slides--visible');
		
	}	

	function updateDots() {

	}
}



