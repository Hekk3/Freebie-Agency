const track = document.querySelector('.track');
const btnPrev = document.querySelector('.btnPrev');
const btnNext = document.querySelector('.btnNext');
const item = document.querySelectorAll('.slides');

// default
btnPrev.style.pointerEvents = "none";

// check, when we need turn on the button(btnNext)
const trackCheck = track.getBoundingClientRect();
const doc = document.documentElement.getBoundingClientRect();

let total = doc.right - trackCheck.right;

// a start positon the track
let position = 0;
let width = item[0].clientWidth;


let moveTrack = () => {
	track.style.transform = "translateX(" + position + "px)"; // When we click on the button, we move the "track" using translateX + position.
}

let checkBtn = () => { // check buttons - check when the button need stops
	position === 0 ? btnPrev.style.pointerEvents = "none" : btnPrev.style.pointerEvents = "auto" ;
	position === -width * 2 ? btnNext.style.pointerEvents = "none" : btnNext.style.pointerEvents = "auto" ;
}

if (total !== 0) {
	btnNext.addEventListener('click', () => {
		position -= width; // take width the item;

		moveTrack();
		checkBtn();
	});
}

btnPrev.addEventListener('click', () => {
	position += width; // take width the item;

	moveTrack();
	checkBtn();
});