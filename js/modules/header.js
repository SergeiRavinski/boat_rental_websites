export default function Header() {

	//variables
	let visibleMenu = false;
	let visibleWishlist = false;

	const headerVisibleThreshold = 100;
	let currentScrollDirection = null; // "up" / "down"
	let previousScrollPosition = 0;

	//query selectors
	const wishlistButton = document.querySelector('.header__button-wishlist');
	const headerWishlist = document.querySelector('.aside__wishlist');
	const menuButton = document.querySelector('.header__button-hamburgermenu');
	const headerMenu = document.querySelector('.aside__hamburger-menu');
	const mainSection = document.querySelector('.main__main-section');
	const header = document.querySelector('.header');

	//event listener
	wishlistButton.addEventListener('click', handleButtonWishlist);
	menuButton.addEventListener('click', handleButtonMenu);
	mainSection.addEventListener('click', handleClickBackground);

	if (header !== null) {
		window.addEventListener('scroll', handleWindowScroll);
	}

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

	function handleWindowScroll(event) {
		toggleHeaderVisibility();
	}

	//functions
	function changeVisibilityWishlist() {
		visibleWishlist = !visibleWishlist; 
	}

	function changeVisibilityMenu() {
		visibleMenu = !visibleMenu;
	}

	//show header when scrolling up
	function toggleHeaderVisibility() {
		const scrollY = window.scrollY;

		if (scrollY > previousScrollPosition) {
			currentScrollDirection = 'down';
		} else {
			currentScrollDirection = 'up';
		}

		if (currentScrollDirection === 'down' && scrollY >= headerVisibleThreshold) {
			header.classList.add('header--hidden');
		} else {
			header.classList.remove('header--hidden');
		}

		previousScrollPosition = scrollY;
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