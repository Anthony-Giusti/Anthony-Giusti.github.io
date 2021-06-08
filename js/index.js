/* eslint-disable no-shadow */
/* eslint-disable import/extensions */
import porfolioData from "./data/portfolioData.js";

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav_list_item_link");
const porfolioLinks = document.querySelectorAll(".projects_portfolio_item");
const faders = document.querySelectorAll(".fade-in");

const modalBackground = document.querySelector(".modal-background");
const modalTitle = document.getElementById("modal-title");
const modalVideo = document.getElementById("modal-video");
const modalDescription = document.getElementById("modal-description");
const modalLiveBuild = document.getElementById("modal-live-build");
const modalGitHub = document.getElementById("modal-github");

const copyText = document.getElementById("copy");
const copiedText = document.getElementById("copied");

navToggle.addEventListener("click", () =>
  document.body.classList.toggle("nav-open")
);

navLinks.forEach((link) => {
  link.addEventListener("click", () =>
    document.body.classList.remove("nav-open")
  );
});

modalBackground.addEventListener("click", () => {
  modalBackground.classList.remove("modal-active");
});

for (let i = 0; i < porfolioLinks.length; i += 1) {
  porfolioLinks[i].addEventListener("click", () => {
    modalBackground.classList.toggle("modal-active");
    modalTitle.innerHTML = porfolioData[i].name;
    modalVideo.setAttribute("src", porfolioData[i].video);
    modalDescription.innerHTML = porfolioData[i].description;
    modalLiveBuild.setAttribute("href", porfolioData[i].liveLink);
    modalGitHub.setAttribute("href", porfolioData[i].gitHubLink);
  });
}

const removeCopied = () => {
  copiedText.classList.remove("copied-visible");
};

const copyToClipBoard = () => {
  navigator.clipboard.writeText("anthonyggiusti@gmail.com");
  copiedText.classList.add("copied-visible");
  setTimeout(removeCopied, 2500);
};

copyText.addEventListener("click", copyToClipBoard);

const appearOptions = {
  threshold: 0.75,
  rootMargin: "0px 0px 75px 0px",
};

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("appear");
      console.log(appearOnScroll);
    }
  });
}, appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});
