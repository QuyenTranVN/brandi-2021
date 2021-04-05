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

// ================ Works===============
// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);

const buttons = document.querySelectorAll(".work__bottom__item");
const pics = document.querySelectorAll(".work__bottom__pics");
for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", function () {
		document
			.querySelector(".work__bottom__item.active")
			.classList.remove("active");
		document
			.querySelector(".work__bottom__pics.active")
			.classList.remove("active");

		buttons[i].classList.add("active");
		pics[i].classList.add("active");
	});
}
// Create modal
const eyes = document.querySelectorAll(".work__bottom__hover__eye");
const modal = document.querySelectorAll(".work__bottom__modal");
const overlay = document.querySelector(".work__overlay");
const closeButton = document.querySelectorAll(".close-modal");

for (let i = 0; i < eyes.length; i++) {
	eyes[i].addEventListener("click", function () {
		modal[i].classList.remove("work__bottom__modal__hidden");
		overlay.classList.remove("work__overlay__hidden");
	});
}
for (let i = 0; i < closeButton.length; i++) {
	closeButton[i].addEventListener("click", function () {
		modal[i].classList.add("work__bottom__modal__hidden");
		overlay.classList.add("work__overlay__hidden");
	});

	overlay.addEventListener("click", function () {
		modal[i].classList.add("work__bottom__modal__hidden");
		overlay.classList.add("work__overlay__hidden");
	});
	document.addEventListener("keydown", function (e) {
		if (e.key === "Escape") {
			modal[i].classList.add("work__bottom__modal__hidden");
			overlay.classList.add("work__overlay__hidden");
		}
	});
}

// =================== Meet our team================
// const meetPics = document.querySelectorAll(".meet__bottom__pics");
// const meetDots = document.querySelectorAll(".meet__dot");

// for (let i = 0; i < meetDots.length; i++) {
// 	meetDots[i].addEventListener("click", function () {
// 		document
// 			.querySelector(".meet__bottom__pics.active")
// 			.classList.remove("active");
// 		document.querySelector(".meet__dot.active").classList.remove("active");

// 		meetDots[i].classList.add("active");
// 		meetPics[i].classList.add("active");
// 	});
// }

$(document).ready(function () {
	$(".bottom__box ").slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: false,
		dots: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 426,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});
	$(".meet__bottom").slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: false,
		variableWidth: true,
		dots: true,

		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					centerMode: true,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					centerMode: true,
				},
			},
			{
				breakpoint: 475,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
				},
			},
		],
	});
});
// ======================//=================
window.addEventListener("scroll", function () {
	var myNav = document.querySelector(".navbar");
	myNav.classList.toggle("nav--colored", window.scrollY > 710);
});

// =====================//=======================
const btn = document.querySelector("#button");
window.addEventListener("scroll", function () {
	if (window.scrollY > 300) {
		btn.classList.add("show");
	} else {
		btn.classList.remove("show");
	}
});
btn.addEventListener("click", function () {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
});
// ===========================================
const menu = document.querySelectorAll(".navbar__menu__links");
for (let i = 0; i < menu.length; i++) {
	window.addEventListener("scroll", function () {
		if ((window.scrollY > 0) & (window.scrollY < 710)) {
			document
				.querySelector(".navbar__menu__links.active")
				.classList.remove("active");

			menu[0].classList.add("active");
		}
		if ((window.scrollY > 710) & (window.scrollY < 1200)) {
			document
				.querySelector(".navbar__menu__links.active")
				.classList.remove("active");

			menu[1].classList.add("active");
		}
		if ((window.scrollY > 1200) & (window.scrollY < 2088)) {
			document
				.querySelector(".navbar__menu__links.active")
				.classList.remove("active");

			menu[2].classList.add("active");
		}
		if ((window.scrollY > 2088) & (window.scrollY < 3500)) {
			document
				.querySelector(".navbar__menu__links.active")
				.classList.remove("active");

			menu[3].classList.add("active");
		}
		if ((window.scrollY > 3500) & (window.scrollY < 4240)) {
			document
				.querySelector(".navbar__menu__links.active")
				.classList.remove("active");

			menu[4].classList.add("active");
		}
	});
}

// const home = $("#home");
// const feature = $("#feature");
// const works = $("#works");
// const team = $("#team");
// const contact = $("#contact");

// home.addEventListener("click", function () {
// 	window.scrollTo({
// 		top: 0,
// 		behavior: "smooth",
// 	});
// });
// feature.addEventListener("click", function () {
// 	window.scrollTo({
// 		top: 710,
// 		behavior: "smooth",
// 	});
// });
// home.addEventListener("click", function () {
// 	window.scrollTo({
// 		top: ,
// 		behavior: "smooth",
// 	});
// });
// home.addEventListener("click", function () {
// 	window.scrollTo({
// 		top: 0,
// 		behavior: "smooth",
// 	});
// });
// home.addEventListener("click", function () {
// 	window.scrollTo({
// 		top: 0,
// 		behavior: "smooth",
// 	});
// });
