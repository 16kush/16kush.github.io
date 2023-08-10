document.addEventListener("DOMContentLoaded", function () {

	const portfolioData = [
		{
			title: "Nindra: App",
			description: "Driver Drowsiness detection using CV and DeepLearning.",
			link: "https://github.com/16kush/Driver-Drowsiness-Detection/",
			imageSrc: "./assets/img/Driver-Drowsiness-Detection_Template.png",
		},
		{
			title: "Avinya",
			description: "An innovative peer-to-peer (P2P) learning platform.",
			link: "https://github.com/16kush/Avinya",
			imageSrc: "./assets/img/Avinya.png",
		},
		{
			title: "Chittis: Brain Tumor Detection System",
			description: "A Resnet BAsed ML model for processing X-ray Images.",
			link: "https://github.com/16kush/Chittis-Brain-Tumor-Detection",
			imageSrc: "./assets/img/Chittis.png",
		},
		{
			title: "Aushadhi Buddy : Medical Chat Bot",
			description:"ML based chat interface for diseases analysis",
			link: "https://github.com/16kush/Aushadhi-Buddy",
			imageSrc: "./assets/img/Aushadhi.png",
		},
	];

	const portfolioContainer = document.querySelector(
		".portfolio__container .swiper-wrapper"
	);

	function updateContent(container, data) {
		const content = data
			.map(
				(item) => `
          <div class="portfolio__content grid swiper-slide">
            <img src="${item.imageSrc}" alt="${item.title} vector art" class="portfolio__img">
            <div class="portfolio__data">
              <h3 class="portfolio__title">${item.title}</h3>
              <p class="portfolio__description">${item.description}</p>
              <a href="${item.link}" class="button button--flex button--small portfolio__button">
                View
                <i class="uil uil-arrow-right button__icon"></i>
              </a>
            </div>
          </div>
        `
			)
			.join("");

		container.innerHTML = content;
		// Initialize Swiper slider
		new Swiper(".portfolio__container", {
			cssMode: true,
			loop: true,
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
		});
	}

	updateContent(portfolioContainer, portfolioData);
});
