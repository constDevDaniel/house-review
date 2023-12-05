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

// JavaScript
document.body.addEventListener("scroll", function () {
	var scrollHeight = Number(document.documentElement.scrollHeight);
	var scrollTop = Number(document.documentElement.scrollTop);
	var clientHeight = Number(document.documentElement.clientHeight);
	var scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
	console.log(scrolled);
	console.log(scrolled);
	if (scrolled > 10) {
		document.getElementById("backTopButton").style.display = "block";
	} else {
		document.getElementById("backTopButton").style.display = "none";
	}
});
