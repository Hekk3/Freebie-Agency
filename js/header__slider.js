// my own slider, govnocode + me = my own slider

const track1 = document.querySelector('.track1');
const btnPrev1 = document.querySelector('.btnPrev1');
const btnMiddle1 = document.querySelector('.btnMiddle1');
const btnNext1 = document.querySelector('.btnNext1');
const item1 = document.querySelectorAll('.item1');
let position1 = 0;
let width1 = item1[0].clientWidth;

if (position1 === 0) {
	btnPrev1.classList.add('header__slider-btn_active');
}

let moveTrack1 = () => {
	track1.style.transform = "translateX(" + position1 + "px)"; // When we click on the button, we move the "track" using translateX + position.
}

let checkBtn1 = () => { // check buttons - check when the button need stops
	position1 === 0 ? btnPrev1.classList.add('header__slider-btn_active') : btnPrev1.classList.remove('header__slider-btn_active') ;

	position1 === -width1 ? btnMiddle1.classList.add('header__slider-btn_active') : btnMiddle1.classList.remove('header__slider-btn_active') ;

	position1 === -width1 * 2 ? btnNext1.classList.add('header__slider-btn_active') : btnNext1.classList.remove('header__slider-btn_active') ;

}

btnNext1.addEventListener('click', () => {
	position1 = -width1 * 2; // take width the item;

	moveTrack1();
	checkBtn1();
});

btnMiddle1.addEventListener('click', () => {
	position1 = -width1; // take width the item;

	moveTrack1();
	checkBtn1();
});

btnPrev1.addEventListener('click', () => {
	position1 = 0; // take width the item;

	moveTrack1();
	checkBtn1();
});