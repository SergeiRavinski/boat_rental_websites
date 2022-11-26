export default function Wishlist() {
	
	//query selectors
	const wishlistButton = document.querySelector('.button__wishlist');
	const wishlist = document.querySelector('.wishlist');

	//event listener
	wishlistButton.addEventListener('click', handleButtonWishlist);

	//handlers
	function handleButtonWishlist(event) {
		toggleWishlist();
	}

	//functions
	function toggleWishlist() {
		wishlist.classList.toggle('wishlist--visible');
	}
}	
