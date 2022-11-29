export default function Header() {

	//Wishlist
	
	//variables
	//let inactiveWishlist = true;

	//query selectors
	const wishlistButton = document.querySelector('.header__button-wishlist');
	const wishlist = document.querySelector('.aside__wishlist');
	//const headerMenu = document.querySelector('.aside__hamburger-menu');

	//event listener
	wishlistButton.addEventListener('click', handleButtonWishlist);

	//handlers
	function handleButtonWishlist(event) {
		toggleWishlist();
		//changeVisibilityOfPreviousWindow()
		//closePreviousWindow();
	}

	//functions
	function toggleWishlist() {
		wishlist.classList.toggle('wishlist--visible');
	}

	//function changeVisibilityOfPreviousWindow() {
	//	inactiveWishlist = !inactiveWishlist; 
	//}

	////close the menu if it's opened
	//function closePreviousWindow() {
	//	if (inactiveWishlist === false) {
	//		wishlist.classList.add('aside__hamburger-menu');
	//	}
	//	else {
	//		wishlist.classList.remove('aside__hamburger-menu');
	//	}
	//}

	//Hamburger menu

	//variables
	let visibleMenu = false;
	let inactivePreviousWindow = true; 

	//query selectors
	const menuButton = document.querySelector('.header__button-hamburgermenu');
	const headerMenu = document.querySelector('.aside__hamburger-menu');
	const wishlistClosed = document.querySelector('.aside__wishlist');

	//event listeners 
	menuButton.addEventListener('click', handleButtonMenu);

	//event handlers 
	function handleButtonMenu(event) {
		changeVisibility();
		changeVisibilityOfPreviousWindow()
		toggleMenu();	
		closePreviousWindow();
	}

	//functions
	function changeVisibility() {
		visibleMenu = !visibleMenu;
	}

	function changeVisibilityOfPreviousWindow() {
		inactivePreviousWindow = !inactivePreviousWindow; 
	}

	function toggleMenu() {
		if (visibleMenu === true) {
			headerMenu.classList.add('hamburger__menu--visible');
		} 
		else {
			headerMenu.classList.remove('hamburger__menu--visible');
		}
	}
	
	//close the wishlist if it's opened
	function closePreviousWindow() {
		if (inactivePreviousWindow === true) {
			wishlist.classList.add('aside__wishlist');
		}
		else {
			wishlist.classList.remove('aside__wishlist');
		}
	}
}	



////variables / model
	//let visibleMenu = true;
	//let visibleWishlist = false;
	//let inactivePreviousWindow = true; 

	////query selectors
	//const menuButton = document.querySelector('.button__hamburgermenu');
	//const headerMenu = document.querySelector('.aside__hamburger-menu');
	//const wishlist = document.querySelector('.wishlist');

	////const wishListButton = document.querySelector('.button__hamburgermenu');

	////event listeners 
	//menuButton.addEventListener('click', handleButtonMenu);

	////event handlers 
	//function handleButtonMenu(event) {
	//	changeVisibility();
	//	changeVisibilityOfPreviousWindow()
	//	toggleMenu();	
	//	closePreviousWindow();

	//	renderHTML();
	//}

	////functions
	//function changeVisibility() {
	//	visibleMenu = !visibleMenu;

	//	if (visibleMenu === true) {
	//		visibleWishlist = false;
	//	}
	//}

	//function changeVisibilityOfPreviousWindow() {
	//	inactivePreviousWindow = !inactivePreviousWindow; 
	//}

	//function toggleMenu() {
		
	//}
	
	////close the wishlist if it's opened
	//function closePreviousWindow() {
		
	//}


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