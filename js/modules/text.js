export default function Text() {
	//variables
	const myWords = document.querySelectorAll('.word');

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
				myWords[index].classList.remove('word--visible');
			}

			myWords[currentWordIndex].classList.add('word--visible');
		}
	}	
}