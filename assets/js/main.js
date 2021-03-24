// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);
const navbarSlide = () => {
	const burger = document.querySelector(".navbar__burger");
	const navbar = document.querySelector(".navbar__menu");
	const navbarLinks = document.querySelectorAll(".navbar__menu__item");
	burger.addEventListener("click", () => {
		// toggle Nav
		navbar.classList.toggle("navbar__active");

		// animation links
		navbarLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = "";
			} else {
				link.style.animation = `navLinkFade 0.2s ease forwards 
      ${index / 7 + 0.1}s`;
			}
		});
		// burger animation
		burger.classList.toggle("toggle");
	});
};
navbarSlide();

// =============//===============

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
	showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
	showSlides((slideIndex = n));
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("banner__contain");
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
}
// ======================= features======================
const tabs = document.querySelectorAll(".feature__dot");
const contents = document.querySelectorAll(".bottom__box");

tabs.forEach((tab, index) => {
	const content = contents[index];

	tab.onclick = function () {
		document.querySelector(".feature__dot.active").classList.remove("active");
		document.querySelector(".bottom__box.active").classList.remove("active");

		this.classList.add("active");
		content.classList.add("active");
	};
});
