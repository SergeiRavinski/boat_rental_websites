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

	//Add the first boat Jaktar	
	function handleButtonLikeJaktar(event) {
		visibilityJaktar();
		renderHTMLAddJaktar();
	}

	function visibilityJaktar() {
		addedJaktarToWishlist = !addedJaktarToWishlist; 
	}

	function renderHTMLAddJaktar() {

		if (addedJaktarToWishlist === true) {
			boatJaktar.classList.remove('aside__first-boat-jaktar-wishlist--active');
			likeRedBoatJaktar.classList.remove('main__image-like-red-jaktar--active');
			likeBoatJaktar.classList.add('main__image-like-jaktar--active');
		} 

		else {
			boatJaktar.classList.add('aside__first-boat-jaktar-wishlist--active');
			likeRedBoatJaktar.classList.add('main__image-like-red-jaktar--active');
			likeBoatJaktar.classList.remove('main__image-like-jaktar--active');
		}
	}

	//Add the second boat Axopar

	function handleButtonLikeAxopar(event) {
		visibilityAxopar();
		renderHTMLAddAxopar();
	}

	function visibilityAxopar() {
		addedAxoparToWishlist = !addedAxoparToWishlist; 
	}

	function renderHTMLAddAxopar() {

		if (addedAxoparToWishlist === true) {

			boatAxopar.classList.remove('aside__second-boat-axopar-wishlist--active');
		} 
		else {
			boatAxopar.classList.add('aside__second-boat-axopar-wishlist--active');
		}
	}

	//Add the third boat Hallberg-Rassy

	function handleButtonLikeHallbergRassy(event) {
		visibilityHallbergRassy();
		renderHTMLAddHallbergRassy();
	}

	function visibilityHallbergRassy() {
		addedHallbergRassyToWishlist = !addedHallbergRassyToWishlist; 
	}

	function renderHTMLAddHallbergRassy() {

		if (addedHallbergRassyToWishlist === true) {

			boatHallbergRassy.classList.remove('aside__third-boat-hallbergrassy-wishlist--active');
		} 
		else {
			boatHallbergRassy.classList.add('aside__third-boat-hallbergrassy-wishlist--active');
		}
	}
}	