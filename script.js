const timer = document.querySelector('.countdown');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const message = document.querySelector('.message');

const min_plus_one = document.querySelector('.minutes-plus-one');
const min_plus_five = document.querySelector('.minutes-plus-five');
const min_plus_ten = document.querySelector('.minutes-plus-ten');

const min_minus_one = document.querySelector('.minutes-minus-one');
const min_minus_five = document.querySelector('.minutes-minus-five');
const min_minus_ten = document.querySelector('.minutes-minus-ten');

const sec_plus_one = document.querySelector('.seconds-plus-one');
const sec_plus_five = document.querySelector('.seconds-plus-five');
const sec_plus_ten = document.querySelector('.seconds-plus-ten');

const sec_minus_one = document.querySelector('.seconds-minus-one');
const sec_minus_five = document.querySelector('.seconds-minus-five');
const sec_minus_ten = document.querySelector('.seconds-minus-ten');

const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const refresh = document.querySelector('.refresh');

let countSec = 0;
let countMin = 0;

const updateText = () => {
	minutes.innerHTML = (0 + String(countMin)).slice(-2);
	seconds.innerHTML = (0 + String(countSec)).slice(-2);
}
updateText();

const countDown = () => {
	let total = countSec + countMin *60;
	const timeInterval = setTimeout(countDown, 1000);
	stop.onclick = () => {
		clearTimeout(timeInterval);
		stop.style.display = 'none';
		start.style.display = 'inline-block';
	}
	if (total <= 0) {
		clearInterval(timeInterval);

		timer.style.display = 'none';

		min_plus_one.style.display = 'none';
		min_plus_five.style.display = 'none';
		min_plus_ten.style.display = 'none';
		min_minus_one.style.display = 'none';
		min_minus_five.style.display = 'none';
		min_minus_ten.style.display = 'none';

		sec_plus_one.style.display = 'none';
		sec_plus_five.style.display = 'none';
		sec_plus_ten.style.display = 'none';
		sec_minus_one.style.display = 'none';
		sec_minus_five.style.display = 'none';
		sec_minus_ten.style.display = 'none';

		stop.style.display = 'none';

		message.innerHTML = '<br><p>I am done...</p><br><img src="done.png" alt="done" width="300">';
	}

	if(countSec > 0) countSec--;
	else{
		countSec = 59;
		countMin--;
	}
	updateText();
}

// PLUS FUNCTIONS

min_plus_one.onclick = () => {
	if (countMin < 59) ++countMin;
	else countMin = 0;
	updateText();
}

min_plus_five.onclick = () => {
	if (countMin + 5 <= 59) countMin += 5;
	else countMin = 0;
	updateText();
}

min_plus_ten.onclick = () => {
	if (countMin + 10 <= 59) countMin += 10;
	else countMin = 0;
	updateText();
}

sec_plus_one.onclick = () => {
	if (countSec < 59) ++countSec;
	else {
		if (countMin < 59) {
			++countMin;
			countSec = 0;
		}
		else {
			countSec = 0;
			countMin = 0;
		}	
	}
	updateText();
}

sec_plus_five.onclick = () => {
	if (countSec + 5 <= 59) countSec += 5;
	else {
		if (countMin < 59) {
			++countMin;
			countSec += 5 - 60;
		}
		else {
			countSec = 0;
			countMin = 0;
		}	
	}
	updateText();
}

sec_plus_ten.onclick = () => {
	if (countSec + 10 <= 59) countSec += 10;
	else {
		if (countMin < 59) {
			++countMin;
			countSec += 10 - 60;
		}
		else {
			countSec = 0;
			countMin = 0;
		}	
	}
	updateText();
}

// MINUS FUNCTIONS

min_minus_one.onclick = () => {
	if (countMin > 0) --countMin;
	else countMin = 0;
	updateText();
}

min_minus_five.onclick = () => {
	if (countMin >= 5) countMin -= 5;
	else countMin = 0;
	updateText();
}

min_minus_ten.onclick = () => {
	if (countMin >= 10) countMin -= 10;
	else countMin = 0;
	updateText();
}

sec_minus_one.onclick = () => {
	if (countSec > 0) --countSec;
	else {
		if (countMin > 0) {
			--countMin;
			countSec = 59;
		}
		else {
			countSec = 0;
			countMin = 0;
		}	
	}
	updateText();
}

sec_minus_five.onclick = () => {
	if (countSec >= 5) countSec -= 5;
	else {
		if (countMin > 0) {
			--countMin;
			if (countSec - 5 < 0) countSec = 60 + (countSec - 5);
		}
		else {
			countSec = 0;
			countMin = 0;
		}	
	}
	updateText();
}

sec_minus_ten.onclick = () => {
	if (countSec >= 10) countSec -= 10;
	else {
		if (countMin > 0) {
			--countMin;
			if (countSec - 10 < 0) countSec = 60 + (countSec - 10);
		}
		else {
			countSec = 0;
			countMin = 0;
		}	
	}
	updateText();
}

// START, STOP, REFRESH FUNCTIONS

start.onclick = () => {
	countDown();
	start.style.display = 'none';
	stop.style.display = 'inline-block';
}

refresh.onclick = () => {
	document.location.reload();
}