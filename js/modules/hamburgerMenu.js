export default function HamburgerMenu() {

	//variables
	let visibleNavigation = false;

	//query selectors
	const menuButton = document.querySelector('.button__hamburgermenu');
	const headerMenu = document.querySelector('.hamburger__menu');

	//event listeners 
	menuButton.addEventListener('click', handleButtonMenu);

	//event handlers 
	function handleButtonMenu() {
		changeVisibility();
		toggleMenu();	
	}

	//functions
	function changeVisibility() {
		visibleNavigation = !visibleNavigation; 
	}

	function toggleMenu() {
		if (visibleNavigation === true) {
			headerMenu.classList.add('hamburger__menu--visible');
		} 
		else {
			headerMenu.classList.remove('hamburger__menu--visible');
		}
	}
}