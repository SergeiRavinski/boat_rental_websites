export default function TextWithAnimation() {
	
	//variables
	let currentWordIndex = 0;
	let changeWordInterval = setInterval(changeWord, 1300);

	//query selectors
	const myWords = document.querySelectorAll('.main__word');

	function changeWord() {
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

	//function to move text if scroll
	
	//let isPlayed = false;

	//const text = document.querySelector('.parent');

	//document.addEventListener('scroll', handleScroll);

	//function handleScroll() {
	//	if (isPlayed === false) {
	//		(text.scrollTop > 1000); 
	//		console.log('hei');
	//		}
	//		isPlayed = true;
	//}
}