var swiper = new Swiper(".mySwiper", {
	pagination: {
		el: ".swiper-pagination",
		type: "fraction",
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	loop: true,
});



const backTopButton = document.getElementById("backTopButton");

backTopButton.addEventListener("click", function () {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
});
