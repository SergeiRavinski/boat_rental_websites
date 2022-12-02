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
		renderWishlist();
	}

	function handleButtonMenu(event) {
		changeVisibilityMenu();
		renderMenu();
	}

	function changeVisibilityWishlist() {
		visibleWishlist = !visibleWishlist; 
	}

	//functions
	function changeVisibilityMenu() {
		visibleMenu = !visibleMenu;
	}

	function renderWishlist() {

		if (visibleWishlist === true) {
			(visibleMenu = false);
			headerWishlist.classList.add('wishlist--visible');
			headerMenu.classList.remove('hamburger__menu--visible');
		} else {
			headerWishlist.classList.remove('wishlist--visible');
		}	
	}

	function renderMenu() {
		if (visibleMenu === true) {
			(visibleWishlist = false);
			headerMenu.classList.add('hamburger__menu--visible');
			headerWishlist.classList.remove('wishlist--visible');
		} else {
			headerMenu.classList.remove('hamburger__menu--visible');
		}
	}	
}	