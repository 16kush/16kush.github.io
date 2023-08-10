/** @format */

document.addEventListener("DOMContentLoaded", function () {
	const sections = [
		{
			id: "education",
			name: "Academic",
			icon: "graduation-cap",
			active: false,
		},
		{ id: "work", name: "Professional", icon: "briefcase-alt", active: true },
		{ id: "course", name: "Courses", icon: "book-alt", active: false },
		// Add more sections as needed
	];

	const qualifications = [
		{
			title: "BE, Info. & Comm. Technology",
			subtitle: "Adani University, India",
			date: "2020 - 2024",
			type: "education",
			href: "https://www.adaniuni.ac.in/",
		},
		{
			title: "Class XII",
			subtitle: "St. Xaveirs Loyola Hall, Ahmedabad",
			date: "2020",
			type: "education",
			href: "https://www.loyolahallahd.com/",
		},
		{
			title: "Class X",
			subtitle: "St. Kabir School, Ahmedabad",
			date: "2018",
			type: "education",
			href: "https://stkabir.com/",
		},
		{
			title: "Student Co-Ordinator",
			subtitle: "Career Development Cell, Adani University.",
			date: "Nov 2022 - Present",
			type: "work",
			href: "https://www.adaniuni.ac.in/",
		},
		{
			title: "AI Virtual Internship",
			subtitle: "Cognizant",
			date: "Sep 2022",
			type: "work",
			href: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Cognizant/5N2ygyhzMWjKQmgCK_Cognizant_LdjZ2sQCaGHHJJQ2H_1663598596966_completion_certificate.pdf",
		},
		{
			title: "Fintech Eng Virtual Internship",
			subtitle: "Goldmann Sachs",
			date: "Sep 2022",
			type: "work",
			href: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Goldman%20Sachs/NPdeQ43o8P9HJmJzg_Goldman%20Sachs_LdjZ2sQCaGHHJJQ2H_1663596197741_completion_certificate.pdf",
		},
		{
			title: "Data Analytics and Visual. Virtual Internship",
			subtitle: "Accenture",
			date: "Sep 2022",
			type: "work",
			href: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20North%20America/hzmoNKtzvAzXsEqx8_Accenture%20North%20America_LdjZ2sQCaGHHJJQ2H_1663597493568_completion_certificate.pdf",
		},
		{
			title: "Certificate: AI Engineering",
			subtitle: "Issued by: IBM ",
			date: "Dec 2022",
			type: "course",
			href: "https://www.coursera.org/verify/professional-cert/3B3WF3BY7APK",
		},
		{
			title: "Certificate: AI for Bussiness",
			subtitle: "Issued by: Penn University ",
			date: "Dec 2022",
			type: "course",
			href: "https://www.coursera.org/verify/specialization/5YCHUQEV57WK",
		},
		{
			title: "Certificate: Machine Learning",
			subtitle: "Issued by: Stanford & DeeplearningAI ",
			date: "Oct 2022",
			type: "course",
			href: "https://www.coursera.org/verify/specialization/TVGKS8SHVKT5",
		},
		{
			title: "Certificate: Digital Strategy",
			subtitle: "Issued by: IBM & UVA Darden ",
			date: "Oct 2022",
			type: "course",
			href: "https://www.coursera.org/verify/specialization/QHC6MAJN4VBV",
		},
	];

	const buttonsContainer = document.querySelector(".qualification__tabs");
	const contentsContainer = document.querySelector(".qualification__sections");
	const tabs = document.querySelectorAll("[data-target]"),
		tabContents = document.querySelectorAll("[data-content]");

	sections.forEach((section) => {
		const button = document.createElement("div");
		button.classList.add("qualification__button", "button--flex");
		if (section.active) {
			button.classList.add("qualification__active");
		}
		button.setAttribute("data-target", `#${section.id}`);
		button.innerHTML = `<i class="uil uil-${section.icon} qualification__icon"></i>${section.name}`;
		buttonsContainer.appendChild(button);

		const content = document.createElement("div");
		content.classList.add("qualification__content");
		if (section.active) {
			content.classList.add("qualification__active");
		}
		content.setAttribute("data-content", "");
		content.setAttribute("id", section.id);
		contentsContainer.appendChild(content);

		button.addEventListener("click", () => {
			sections.forEach((sec) => {
				sec.active = false;
			});
			section.active = true;

			updateSections();
		});
	});

	function updateSections() {
		sections.forEach((section) => {
			const button = document.querySelector(`[data-target="#${section.id}"]`);
			const content = document.querySelector(`#${section.id}`);

			if (section.active) {
				button.classList.add("qualification__active");
				content.classList.add("qualification__active");
			} else {
				button.classList.remove("qualification__active");
				content.classList.remove("qualification__active");
			}
		});
	}

	qualifications.forEach((qualification) => {
		qualification.href = qualification.href || "#experience";
		generateQualificationContent(qualifications, `#${qualification.type}`);
	});

	function generateQualificationContent(qualifications, tabId) {
		const tabContent = document.querySelector(tabId);
		const filteredQualifications = qualifications.filter(
			(qualification) => qualification.type === tabId.slice(1)
		);

		tabContent.innerHTML = qualifications
			.filter((qualification) => qualification.type === tabId.slice(1))
			.map(
				(qualification, index) => `
				<div class="qualification__data">
					<div>
						<span class="qualification__rounder"></span>
						</div>
						${
							index !== filteredQualifications.length - 1
								? `<span class="qualification__line"></span>`
								: ""
						}
					<div class="qualification__content ${index % 2 === 1 ? "right" : "left"}">
						<a href="${qualification.href}">
							<h3 class="qualification__title">${qualification.title}</h3>
							<p class="qualification__subtitle">${qualification.subtitle}</p>
							<div class="qualification__calendar">
								<i class="uil uil-calendar-alt"></i>
								<span>${qualification.date}</span>
							</div>
						</a>
					</div>
				</div>
			`
			)
			.join("");
	}

	// Set the default tab as active
	tabs[1].classList.add("qualification__active");
	tabContents[1].classList.add("qualification__active");

	// Add click event listener to each tab
	tabs.forEach((tab) => {
		tab.addEventListener("click", () => {
			// Get the target tab content based on the data-target attribute
			const target = document.querySelector(tab.dataset.target);

			// Remove active class from all tab contents
			tabContents.forEach((tabContent) => {
				tabContent.classList.remove("qualification__active");
			});

			// Add active class to the clicked tab content
			target.classList.add("qualification__active");

			// Remove active class from all tabs
			tabs.forEach((tab) => {
				tab.classList.remove("qualification__active");
			});

			// Add active class to the clicked tab
			tab.classList.add("qualification__active");
		});
	});
});
