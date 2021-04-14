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

// ================ Works===============
$(document).ready(function () {
	$(".work__bottom__item").click(function () {
		const value = $(this).attr("data-filter");
		if (value == "all") {
			$(".work__bottom__pic ").show("1000");
		} else {
			$(".work__bottom__pic ")
				.not("." + value)
				.hide("1000");
			$(".work__bottom__pic ")
				.filter("." + value)
				.show("1000");
		}
	});
	$(".work__bottom__item").click(function () {
		$(this).addClass("active").siblings().removeClass("active");
	});
});
// Create modal
const eyes = document.querySelectorAll(".work__bottom__hover img");
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
	$(".banner__contain").slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
	});
});
// =====================//back to top=======================
const btn = document.querySelector("#scrollTop");
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

// Show active menu when scrolling
const highlightMenu = () => {
	const homeMenu = document.querySelector("#home-page");
	const featureMenu = document.querySelector("#feature-page");
	const workMenu = document.querySelector("#work-page");
	const teamMenu = document.querySelector("#team-page");
	const contactMenu = document.querySelector("#contact-page");
	const banner = document.querySelector(".banner").scrollHeight;
	const feature = document.querySelector("#features").scrollHeight + banner;
	const work = document.querySelector("#works").scrollHeight + feature;
	const team = document.querySelector("#team").scrollHeight + work;
	const contact = document.querySelector("#contact").scrollHeight + team;

	let scrollPos = window.pageYOffset;
	// adds 'highlight' class to my menu items
	if (window.innerWidth > 768 && scrollPos < banner) {
		homeMenu.classList.add("highline");
		featureMenu.classList.remove("highline");
	} else if (window.innerWidth > 768 && scrollPos < feature) {
		featureMenu.classList.add("highline");
		homeMenu.classList.remove("highline");
		workMenu.classList.remove("highline");
	} else if (window.innerWidth > 768 && scrollPos < work) {
		workMenu.classList.add("highline");
		featureMenu.classList.remove("highline");
		teamMenu.classList.remove("highline");
	} else if (window.innerWidth > 768 && scrollPos < team) {
		workMenu.classList.remove("highline");
		contactMenu.classList.remove("highline");
		teamMenu.classList.add("highline");
	} else if (window.innerWidth > 768 && scrollPos < contact) {
		teamMenu.classList.remove("highline");
		contactMenu.classList.add("highline");
	}
};
window.addEventListener("scroll", highlightMenu);
window.addEventListener("click", highlightMenu);
