export default function Wishlist() {
	
	//variables
	//let inactiveWishlist = true;

	//query selectors
	const wishlistButton = document.querySelector('.button__wishlist');
	const wishlist = document.querySelector('.wishlist');
	//const headerMenu = document.querySelector('.hamburger__menu');

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
	//		wishlist.classList.add('hamburger__menu');
	//	}
	//	else {
	//		wishlist.classList.remove('hamburger__menu');
	//	}
	//}
}	
