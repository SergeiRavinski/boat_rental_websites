export default function TextWithAnimation() {
	
	//variables
	let currentWordIndex = 0;
	let changeWordInterval = setInterval(changeWord, 1300);

	//query selectors
	const myWords = document.querySelectorAll('.main__word');

	function changeWord(event) {
		increaseCurrentWordIndex();
		renderHTMLText();
	}

	function increaseCurrentWordIndex() {
		if (currentWordIndex < myWords.length - 1) {
			currentWordIndex += 1;
		}

		else {
			currentWordIndex = -1;
			clearInterval(changeWordInterval);	
		}
	}

	//render function
	function renderHTMLText() {
		if (currentWordIndex === -1) {
			for (let index = 0; index < myWords.length; index += 1) {
				myWords[index].classList.add('word--visible--displayLastTime');
			}
			
		} else {
			for (let index = 0; index < myWords.length; index += 1) {
				myWords[index].classList.remove('main__word--visible');
			}

			myWords[currentWordIndex].classList.add('main__word--visible');
		}
	}	

	const text = document.querySelector('.movetext');

	document.addEventListener('scroll', handleScroll);

	let isPlayed = false;

	function handleScroll() {
		if (isPlayed === false) {
			if (window.pageYOffset > 60) {
				
				console.log('omomomomom');
				isPlayed = true;

			}; 
		}

	}

	//function handleScroll() {
	//	if (isPlayed === false) {
	//		if (window.pageYOffset > 60) {
				
	//			console.log('omomomomom');
	//			isPlayed = true;

	//		}; 
	//	}
	//}

}