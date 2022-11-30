export default function Wishlist() {
	
	//variables
	let addedJaktarToWishlist = true;
	let addedAxoparToWishlist = true;
	let addedHallbergRassyToWishlist = true;

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
			boatJaktar.classList.add('aside__first-boat-jaktar-wishlist--active');
			likeRedBoatJaktar.style.display = 'none';
			likeBoatJaktar.style.display = 'block';
		} 

		else {
			boatJaktar.classList.remove('aside__first-boat-jaktar-wishlist--active');
			likeRedBoatJaktar.style.display = 'block';
			likeBoatJaktar.style.display = 'none';
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
			boatAxopar.classList.add('aside__second-boat-axopar-wishlist--active');
			likeRedBoatAxopar.style.display = 'none';
			likeBoatAxopar.style.display = 'block';
		} 
		else {
			boatAxopar.classList.remove('aside__second-boat-axopar-wishlist--active');
			likeRedBoatAxopar.style.display = 'block';
			likeBoatAxopar.style.display = 'none';
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
			boatHallbergRassy.classList.add('aside__third-boat-hallbergrassy-wishlist--active');
			likeRedBoatHallbergRassy.style.display = 'none';
			likeBoatHallbergRassy.style.display = 'block';
		} 
		else {
			boatHallbergRassy.classList.remove('aside__third-boat-hallbergrassy-wishlist--active');
			likeRedBoatHallbergRassy.style.display = 'block';
			likeBoatHallbergRassy.style.display = 'none';
		}
	}
}	