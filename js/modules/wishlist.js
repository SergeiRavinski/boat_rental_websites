export default function Wishlist() {
	
	//variables
	let addedJaktarToWishlist = true;
	let addedAxoparToWishlist = true;
	let addedHallbergRassyToWishlist = true;

	//query selectors

	//boats
	const boatJaktar = document.querySelector('.aside__first-boat-jaktar-wishlist--active');
	const boatAxopar = document.querySelector('.aside__second-boat-axopar-wishlist--active');
	const boatHallbergRassy = document.querySelector('.aside__third-boat-hallbergrassy-wishlist--active');

	//button like
	const buttonLikeJaktar = document.querySelector('.main__button-like-jaktar');
	const buttonLikeAxopar = document.querySelector('.main__button-like-axopar');
	const buttonLikeHallbergRassy = document.querySelector('.main__button-like-hallbergrassy');

	//like buttons inside wishlist
	const buttonLikeJaktarInsideWishlist = document.querySelector('.aside__like-button-jaktar-wishlist');
	const buttonLikeAxoparInsideWishlist = document.querySelector('.aside__like-button-axopar-wishlist');
	const buttonLikeHallbergRassyInsideWishlist = document.querySelector('.aside__like-button-hallbergrassy-wishlist');

	//images like
	const likeBoatJaktar = document.querySelector('.main__image-like-jaktar');
	const likeBoatAxopar = document.querySelector('.main__image-like-axopar');
	const likeBoatHallbergRassy = document.querySelector('.main__image-like-hallbergrassy');

	//images red like
	const likeRedBoatJaktar = document.querySelector('.main__image-like-red-jaktar');
	const likeRedBoatAxopar = document.querySelector('.main__image-like-red-axopar');
	const likeRedBoatHallbergRassy = document.querySelector('.main__image-like-red-hallbergrassy');

	const menuStopPropogation = document.querySelector('.aside__hamburger-menu');
	const wishlistStopPropogation = document.querySelector('.aside__wishlist');

	const windowAddedWishlist = document.querySelector('.main__window-addded-wishlist');

	//event listeners 

	//buttons
	buttonLikeJaktar.addEventListener('click', handleButtonLikeJaktar);
	buttonLikeAxopar.addEventListener('click', handleButtonLikeAxopar);
	buttonLikeHallbergRassy.addEventListener('click', handleButtonLikeHallbergRassy);

	//buttons inside wishlist
	buttonLikeJaktarInsideWishlist.addEventListener('click', handleButtonLikeJaktarInsideWishlist);
	buttonLikeAxoparInsideWishlist.addEventListener('click', handleButtonLikeAxoparInsideWishlist);
	buttonLikeHallbergRassyInsideWishlist.addEventListener('click', handleButtonLikeHallbergRassyInsideWishlist);

	menuStopPropogation.addEventListener('click', handleClickMenu);
	wishlistStopPropogation.addEventListener('click', handleClickWishlist);
	
	//event handlers 

	function handleClickMenu(event) {
		event.stopPropagation();
	}

	function handleClickWishlist(event) {
		event.stopPropagation();
	}

	//Add the first boat Jaktar	
	function handleButtonLikeJaktar(event) {
		event.stopPropagation();
		visibilityJaktar();
		renderHTMLAddJaktar();
	}

	function visibilityJaktar() {
		addedJaktarToWishlist = !addedJaktarToWishlist; 
	}

	function renderHTMLAddJaktar() {

		let removeFirst;
		let removeSecond;
		if (addedJaktarToWishlist === true) {
			boatJaktar.classList.add('aside__first-boat-jaktar-wishlist--active');
			likeRedBoatJaktar.style.display = 'none';
			likeBoatJaktar.style.display = 'block';
			windowAddedWishlist.style.display = 'block';
			windowAddedWishlist.innerHTML = 'Removed from wishlist';
			removeFirst = setTimeout(() => {
				windowAddedWishlist.style.display = 'none';
			}, 4000);
		} 

		else {
			boatJaktar.classList.remove('aside__first-boat-jaktar-wishlist--active');
			likeRedBoatJaktar.style.display = 'block';
			likeBoatJaktar.style.display = 'none';
			windowAddedWishlist.style.display = 'block';
			windowAddedWishlist.innerHTML = 'Added to wishlist';
			removeSecond = setTimeout(() => {
				windowAddedWishlist.style.display = 'none';
			}, 4000);
		}
	}

	//Add the second boat Axopar

	function handleButtonLikeAxopar(event) {
		event.stopPropagation();
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
			windowAddedWishlist.style.display = 'block';
			windowAddedWishlist.innerHTML = 'Removed from wishlist';
			setTimeout(() => {
				windowAddedWishlist.style.display = 'none';
			}, 4000);
		} 
		else {
			boatAxopar.classList.remove('aside__second-boat-axopar-wishlist--active');
			likeRedBoatAxopar.style.display = 'block';
			likeBoatAxopar.style.display = 'none';
			windowAddedWishlist.style.display = 'block';
			windowAddedWishlist.innerHTML = 'Added to wishlist';
			setTimeout(() => {
				windowAddedWishlist.style.display = 'none';
			}, 4000);
		}
	}

	//Add the third boat Hallberg-Rassy

	function handleButtonLikeHallbergRassy(event) {
		event.stopPropagation();
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
			windowAddedWishlist.style.display = 'block';
			windowAddedWishlist.innerHTML = 'Removed from wishlist';
			setTimeout(() => {
				windowAddedWishlist.style.display = 'none';
			}, 4000);
			
			
		} 
		else {
			boatHallbergRassy.classList.remove('aside__third-boat-hallbergrassy-wishlist--active');
			likeRedBoatHallbergRassy.style.display = 'block';
			likeBoatHallbergRassy.style.display = 'none';
			windowAddedWishlist.style.display = 'block';
			windowAddedWishlist.innerHTML = 'Added to wishlist';
			setTimeout(() => {
				windowAddedWishlist.style.display = 'none';
			}, 4000);
		}
	}

	//remove boats from the wishlist

	function handleButtonLikeJaktarInsideWishlist() {
		boatJaktar.classList.add('aside__first-boat-jaktar-wishlist--active');
		likeRedBoatJaktar.style.display = 'none';
		likeBoatJaktar.style.display = 'block';
		windowAddedWishlist.style.display = 'block';
		windowAddedWishlist.innerHTML = 'Removed from wishlist';
		setTimeout(() => {
			windowAddedWishlist.style.display = 'none';
		}, 4000);
	}

	function handleButtonLikeAxoparInsideWishlist() {
		boatAxopar.classList.add('aside__second-boat-axopar-wishlist--active');
		likeRedBoatAxopar.style.display = 'none';
		likeBoatAxopar.style.display = 'block';
		windowAddedWishlist.style.display = 'block';
		windowAddedWishlist.innerHTML = 'Removed from wishlist';
		setTimeout(() => {
			windowAddedWishlist.style.display = 'none';
		}, 4000);
	}

	function handleButtonLikeHallbergRassyInsideWishlist() {
		boatHallbergRassy.classList.add('aside__third-boat-hallbergrassy-wishlist--active');
		likeRedBoatHallbergRassy.style.display = 'none';
		likeBoatHallbergRassy.style.display = 'block';
		windowAddedWishlist.style.display = 'block';
		windowAddedWishlist.innerHTML = 'Removed from wishlist';
		setTimeout(() => {
			windowAddedWishlist.style.display = 'none';
		}, 4000);
	}
}	