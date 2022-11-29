export default function Wishlist() {
	
	//variables
	let addedJaktarToWishlist = false;
	let addedAxoparToWishlist = false;
	let addedHallbergRassyToWishlist = false;

	//query selectors
	const buttonLikeJaktar = document.querySelector('.like__button--jaktar');
	const buttonLikeAxopar = document.querySelector('.like__button--axopar');
	const buttonLikeHallbergRassy = document.querySelector('.like__button--hallbergrassy');

	const boatJaktar = document.querySelector('.first__boat--jaktar--wishlist--active');
	const boatAxopar = document.querySelector('.second__boat--axopar--wishlist--active');
	const boatHallbergRassy = document.querySelector('.third__boat--hallbergrassy--wishlist--active');

	//images like
	const likeBoatJaktar = document.querySelector('.image__like--jaktar');
	const likeBoatAxopar = document.querySelector('.image__like--axopar');
	const likeBoatHallbergRassy = document.querySelector('.image__like--hallbergrassy');

	//images red like
	const likeRedBoatJaktar = document.querySelector('.image__like--red--jaktar');
	const likeRedBoatAxopar = document.querySelector('.image__like--red--axopar');
	const likeRedBoatHallbergRassy = document.querySelector('.image__like--red--hallbergrassy');

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
			boatJaktar.classList.remove('first__boat--jaktar--wishlist--active');
			likeRedBoatJaktar.classList.remove('image__like--red--jaktar');
			likeBoatJaktar.classList.add('image__like--jaktar');
		} 

		else {
			boatJaktar.classList.add('first__boat--jaktar--wishlist--active');
			likeRedBoatJaktar.classList.add('image__like--red--jaktar');
			likeBoatJaktar.classList.remove('image__like--jaktar');
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

			boatAxopar.classList.remove('second__boat--axopar--wishlist--active');
		} 
		else {
			boatAxopar.classList.add('second__boat--axopar--wishlist--active');
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

			boatHallbergRassy.classList.remove('third__boat--hallbergrassy--wishlist--active');
		} 
		else {
			boatHallbergRassy.classList.add('third__boat--hallbergrassy--wishlist--active');
		}
	}
}	