export default function Wishlist() {
	const countDown = () => {
		const countDate = new Date('October 1, 2023, 00:00:00').getTime();
		const now = new Date().getTime();
		const gap = countDate - now;

		const second = 1000;
		const minute = second * 60;
		const hour = minute * 60;
		const day = hour * 24;

		const textDay = Math.floor(gap / day);
		const textHour = Math.floor((gap % day) / hour);
		const textMinute = Math.floor((gap % hour)/ minute);
		const textSecond = Math.floor((gap % minute) / second);

		if (gap < 1000) {
			document.querySelector('.main__main-section-counter').style.display = 'none';
		}

		document.querySelector('.main__main-section-counter-elements-countdown-day-days').innerText = textDay;
		document.querySelector('.main__main-section-counter-elements-countdown-day-hours').innerText = textHour;
		document.querySelector('.main__main-section-counter-elements-countdown-day-minutes').innerText = textMinute;
		document.querySelector('.main__main-section-counter-elements-countdown-day-seconds').innerText = textSecond;
	}

	setInterval(countDown, 1000);
}	