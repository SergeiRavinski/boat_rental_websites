export default function Wishlist() {
	
	//variables
	let addedJaktarToWishlist = false;
	let addedAxoparToWishlist = false;
	let addedHallbergRassyToWishlist = false;

	//query selectors
	const buttonLikeJaktar = document.querySelector('.main__button-like-jaktar');
	const buttonLikeAxopar = document.querySelector('.main__button-like-axopar');
	const buttonLikeHallbergRassy = document.querySelector('.main__button-like-hallbergrassy');

	const boatJaktar = document.querySelector('.aside__first-boat-jaktar-wishlist--active');
	const boatAxopar = document.querySelector('.aside__second-boat-axopar-wishlist--active');
	const boatHallbergRassy = document.querySelector('.aside__third-boat-hallbergrassy-wishlist--active');

	//images like
	const likeBoatJaktar = document.querySelector('.main__image-like-jaktar');
	const likeBoatAxopar = document.querySelector('.main__image-like-axopar');
	const likeBoatHallbergRassy = document.querySelector('.main__image-like-hallbergrassy');

	//images red like
	const likeRedBoatJaktar = document.querySelector('.main__image-like-red-jaktar');
	const likeRedBoatAxopar = document.querySelector('.main__image-like-red-axopar');
	const likeRedBoatHallbergRassy = document.querySelector('.main__image-like-red-hallbergrassy');

	//event listeners 
	buttonLikeJaktar.addEventListener('click', handleButtonLikeJaktar);
	buttonLikeAxopar.addEventListener('click', handleButtonLikeAxopar);
	buttonLikeHallbergRassy.addEventListener('click', handleButtonLikeHallbergRassy);
	
	//event handlers 

	//Add first boat Jaktar	
	function handleButtonLikeJaktar(event) {
		visibilityJaktar();
		addJaktar();
	}

	function visibilityJaktar() {
		addedJaktarToWishlist = !addedJaktarToWishlist; 
	}

	function addJaktar() {

		if (addedJaktarToWishlist === true) {
			boatJaktar.classList.remove('aside__first-boat-jaktar-wishlist--active');
			likeRedBoatJaktar.classList.remove('main__image-like-red-jaktar');
			likeBoatJaktar.classList.add('main__image-like-jaktar');
		} 

		else {
			boatJaktar.classList.add('aside__first-boat-jaktar-wishlist--active');
			likeRedBoatJaktar.classList.add('main__image-like-red-jaktar');
			likeBoatJaktar.classList.remove('main__image-like-jaktar');
		}
	}

	//Add second boat Axopar

	function handleButtonLikeAxopar(event) {
		visibilityAxopar();
		addAxopar();
	}

	function visibilityAxopar() {
		addedAxoparToWishlist = !addedAxoparToWishlist; 
	}

	function addAxopar() {

		if (addedAxoparToWishlist === true) {

			boatAxopar.classList.remove('aside__second-boat-axopar-wishlist--active');
		} 
		else {
			boatAxopar.classList.add('aside__second-boat-axopar-wishlist--active');
		}
	}

	//Add third boat Hallberg-Rassy

	function handleButtonLikeHallbergRassy(event) {
		visibilityHallbergRassy();
		addHallbergRassy();
	}

	function visibilityHallbergRassy() {
		addedHallbergRassyToWishlist = !addedHallbergRassyToWishlist; 
	}

	function addHallbergRassy() {

		if (addedHallbergRassyToWishlist === true) {

			boatHallbergRassy.classList.remove('aside__third-boat-hallbergrassy-wishlist--active');
		} 
		else {
			boatHallbergRassy.classList.add('aside__third-boat-hallbergrassy-wishlist--active');
		}
	}
}	