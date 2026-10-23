const navButtons = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".content-section");

function showSection(sectionId) {
  sections.forEach((section) => {
    const active = section.id === sectionId;
    section.classList.toggle("active", active);
    section.setAttribute("aria-hidden", String(!active));
  });

  navButtons.forEach((button) => {
    const active = button.dataset.section === sectionId;
    button.classList.toggle("active", active);
    button.setAttribute("aria-current", active ? "page" : "false");
  });
}

navButtons.forEach((button) => {
  button.addEventListener("click", () => showSection(button.dataset.section));
});

const linkedinUrl = "https://www.linkedin.com/in/prabhu-preetham-kota-";
["linkedin-sidebar", "linkedin-contact"].forEach((id) => {
  const link = document.getElementById(id);
  if (!link) return;
  if (linkedinUrl) {
    link.href = linkedinUrl;
    link.target = "_blank";
    link.rel = "noreferrer";
    if (id === "linkedin-contact") {
      const strong = link.querySelector("strong");
      if (strong) strong.textContent = "View LinkedIn profile";
    }
  } else {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      alert("Add your full LinkedIn profile URL in script.js first.");
    });
  }
});

document.getElementById("year").textContent = new Date().getFullYear();
showSection("about");
