export default function AddToWishlist() {
	
	//variables
	const boatJaktar = document.querySelector('.first__boat--jaktar--wishlist--active');
	const boatAxopar = document.querySelector('.second__boat--axopar--wishlist--active');
	const boatHallbergRassy = document.querySelector('.third__boat--hallbergrassy--wishlist--active');

	const likeBoatJaktar = document.querySelector('.image__like--jaktar');
	const likeBoatAxopar = document.querySelector('.image__like--axopar');
	const likeBoatHallbergRassy = document.querySelector('.image__like--hallbergrassy');

	//query selectors
	const buttonLikeJaktar = document.querySelector('#like__button--jaktar');
	const buttonLikeAxopar = document.querySelector('#like__button-axopar');
	const buttonLikeHallbergRassy = document.querySelector('#like__button--hallbergrassy');

	//event listeners 
	buttonLikeJaktar.addEventListener('click', handleButtonLikeJaktar);
	//buttonLikeAxopar.addEventListener('click', handleButtonLikeAxopar);
	//buttonLikeHallbergRassy.addEventListener('click', handleButtonLikeHallbergRassy);
	
	//event handlers 
	function handleButtonLikeJaktar() {
		//boatJaktar.classList.add = ('first__boat--jaktar--wishlist--active');
		likeBoatJaktar.classList.remove('image__like--jaktar');
		likeBoatJaktar.classList.add('image__like--red--jaktar');
	}

	function handleButtonLikeAxopar() {

	}

	function handleButtonLikeHallbergRassy() {

	}

	//console.log(buttonLikeJaktar);
}	