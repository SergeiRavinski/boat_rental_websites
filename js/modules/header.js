export default function Header() {

	//variables
	let visibleMenu = false;
	let visibleWishlist = false;

	//query selectors
	const wishlistButton = document.querySelector('.header__button-wishlist');
	const headerWishlist = document.querySelector('.aside__wishlist');
	const menuButton = document.querySelector('.header__button-hamburgermenu');
	const headerMenu = document.querySelector('.aside__hamburger-menu');
	const mainSection = document.querySelector('.main__main-section');

	//event listener
	wishlistButton.addEventListener('click', handleButtonWishlist);
	menuButton.addEventListener('click', handleButtonMenu);
	mainSection.addEventListener('click', handleClickBackground);

	//handlers
	function handleButtonWishlist() {
		changeVisibilityWishlist();
		renderWishlist();
	}

	function handleButtonMenu() {
		changeVisibilityMenu();
		renderMenu();
	}

	function handleClickBackground() {
		renderCloseAllMenus();
	}

	//functions
	function changeVisibilityWishlist() {
		visibleWishlist = !visibleWishlist; 
	}

	function changeVisibilityMenu() {
		visibleMenu = !visibleMenu;
	}

	function renderWishlist() {

		if (visibleWishlist === true) {
			(visibleMenu = false);
			headerWishlist.classList.add('wishlist--visible');
			wishlistButton.classList.add('header__button-wishlist--active');
			headerMenu.classList.remove('hamburger__menu--visible');
			menuButton.classList.remove('open');
		} else {
			headerWishlist.classList.remove('wishlist--visible');
			wishlistButton.classList.remove('header__button-wishlist--active');
		}	
	}

	function renderMenu() {
		if (visibleMenu === true) {
			(visibleWishlist = false);
			headerMenu.classList.add('hamburger__menu--visible');
			menuButton.classList.add('open');
			headerWishlist.classList.remove('wishlist--visible');
			wishlistButton.classList.remove('header__button-wishlist--active');
		} else {
			headerMenu.classList.remove('hamburger__menu--visible');
			menuButton.classList.remove('open');
		}
	}	

	//close all menus if click outside of menu
	function renderCloseAllMenus() {
		headerWishlist.classList.remove('wishlist--visible');
		headerMenu.classList.remove('hamburger__menu--visible');
		menuButton.classList.remove('open');
		wishlistButton.classList.remove('header__button-wishlist--active');
		(visibleMenu = false);
		(visibleWishlist = false);
	}
}	