export default function AddToWishlist() {
	
	//variables
	let addedJaktarToWishlist = false;
	let addedAxoparToWishlist = false;
	let addedHallbergRassyToWishlist = false;

	//query selectors
	const boatJaktar = document.querySelector('.first__boat--jaktar--wishlist--active');
	const boatAxopar = document.querySelector('.second__boat--axopar--wishlist--active');
	const boatHallbergRassy = document.querySelector('.third__boat--hallbergrassy--wishlist--active');

	const likeBoatJaktar = document.querySelector('.image__like--jaktar');
	const likeBoatAxopar = document.querySelector('.image__like--axopar');
	const likeBoatHallbergRassy = document.querySelector('.image__like--hallbergrassy');

	const buttonLikeJaktar = document.querySelector('#like__button--jaktar');
	const buttonLikeAxopar = document.querySelector('#like__button--axopar');
	const buttonLikeHallbergRassy = document.querySelector('#like__button--hallbergrassy');

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

		if (addedJaktarToWishlist === false) {
			boatJaktar.classList.add('first__boat--jaktar--wishlist--active');
		} 
		else {
			boatJaktar.classList.remove('first__boat--jaktar--wishlist--active');
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

		if (addedAxoparToWishlist === false) {

			boatAxopar.classList.add('second__boat--axopar--wishlist--active');
		} 
		else {
			boatAxopar.classList.remove('second__boat--axopar--wishlist--active');
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

		if (addedHallbergRassyToWishlist === false) {

			boatHallbergRassy.classList.add('third__boat--hallbergrassy--wishlist--active');
		} 
		else {
			boatHallbergRassy.classList.remove('third__boat--hallbergrassy--wishlist--active');
		}
	}
}	