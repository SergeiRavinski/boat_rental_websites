export default function TextWithAnimation() {
	//variables
	const myWords = document.querySelectorAll('.main__word');

	let currentWordIndex = 0;
	let changeWordInterval = setInterval(changeWord, 1300);

	function changeWord(event) {
		increaseCurrentWordIndex();
		updateWordHtml();
	}

	function increaseCurrentWordIndex() {
		if (currentWordIndex < myWords.length - 1) {
			currentWordIndex += 1;
			//console.log(currentWordIndex);
		}

		else {
			currentWordIndex = -1;
			clearInterval(changeWordInterval);	
			//console.log(currentWordIndex)
		}
	}

	function updateWordHtml() {
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
}