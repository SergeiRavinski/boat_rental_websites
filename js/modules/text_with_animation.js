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


	//let isMovedText = false;

	const moveTitle = document.querySelector('.main__news-second-title');
	 
	moveTitle.addEventListener('scroll', handleMoveTextWhenScroll);

	function handleMoveTextWhenScroll() {
		if  (scrollTop >= 200) {
		
		}
		console.log('Hei')
	}




	//const textFloat = document.querySelector('.main__text');

	//textFloat.addEventListener('onload', handleFloatUp);


	//function handleFloatUp() {
	//	document.querySelector('.main__text').style.top = '15%';
	//}



	//function to move text when scrolling
	
	//let isPlayed = false;

	//const text = document.querySelector('.main__news-main-section-info');

	//document.addEventListener('scroll', handleScroll);

	//function handleScroll() {
	//	if (isPlayed === false) {
	//		(text.scrollTop >= 400); 
	//		console.log('hei');
	//		}
	//		isPlayed = true;
	//}
}