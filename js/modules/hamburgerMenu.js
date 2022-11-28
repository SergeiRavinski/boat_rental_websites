export default function HamburgerMenu() {

	//variables
	let visibleMenu = false;
	let inactivePreviousWindow = true; 

	//query selectors
	const menuButton = document.querySelector('.button__hamburgermenu');
	const headerMenu = document.querySelector('.hamburger__menu');
	const wishlist = document.querySelector('.wishlist');

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
			wishlist.classList.add('wishlist');
		}
		else {
			wishlist.classList.remove('wishlist');
		}
	}
}