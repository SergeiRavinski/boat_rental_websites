export default function Header() {

	//variables
	let visibleMenu = false;
	let visibleWishlist = false;

	//query selectors
	const wishlistButton = document.querySelector('.header__button-wishlist');
	const headerWishlist = document.querySelector('.aside__wishlist');
	const menuButton = document.querySelector('.header__button-hamburgermenu');
	const headerMenu = document.querySelector('.aside__hamburger-menu');

	//event listener
	wishlistButton.addEventListener('click', handleButtonWishlist);
	menuButton.addEventListener('click', handleButtonMenu);

	//handlers
	function handleButtonWishlist(event) {
		changeVisibilityWishlist();
		//changeVisibilityMenu();
		render();
	}

	function handleButtonMenu(event) {
		changeVisibilityMenu();
		//changeVisibilityWishlist();
		render();
	}

	function changeVisibilityWishlist() {
		visibleWishlist = !visibleWishlist; 
	}

	//functions
	function changeVisibilityMenu() {
		visibleMenu = !visibleMenu;
	}

	function render() {

		if (visibleWishlist === true) {
			headerWishlist.classList.add('wishlist--visible');
			visibleMenu === false;
		} else {
			headerWishlist.classList.remove('wishlist--visible');
		}	

		if (visibleMenu === true) {
			headerMenu.classList.add('hamburger__menu--visible');
			visibleWishlist === false;
		} else {
			headerMenu.classList.remove('hamburger__menu--visible');
		}
	}
}	
	///** 
	// *	the job of this function is that, based on all variables from our "model",
	// * we render the desired html (hence the name). i.e. this is the only function
	// * that should alter DOM elements (think .classList, .innerText, .innerHTML)
	// */
	//function renderHTML() {
	//	if (visibleMenu === true) {
	//		headerMenu.classList.add('hamburger__menu--visible');
	//	} else {
	//		headerMenu.classList.remove('hamburger__menu--visible');
	//	}

	//	if (inactivePreviousWindow === true) {
	//		wishlist.classList.add('wishlist');
	//	} else {
	//		wishlist.classList.remove('wishlist');
	//	}
		
	//}