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
				link.style.animation = `navLinkFade 0.5s ease forwards 
      ${index / 3 + 1}s`;
			}
		});
		// burger animation
		burger.classList.toggle("toggle");
	});
};
navbarSlide();
