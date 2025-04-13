const navLinks = document.querySelectorAll(".navbar a");
const sections = document.querySelectorAll("section[id]");

// 1. Add active class immediately on click
navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    // Prevent default behavior of anchor tag
    e.preventDefault();

    // Remove active class from all links
    navLinks.forEach(l => l.classList.remove("active"));

    // Add active class to the clicked link
    link.classList.add("active");

    // Smooth scroll to the corresponding section
    const targetSection = document.querySelector(link.getAttribute("href"));
    targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// 2. Update active class on scroll
window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120; // Adjusting scroll offset
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    // Add active class when the section is in view
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });

  // Highlight "Home" at top
  if (scrollY < 200) {
    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#home") {
        link.classList.add("active");
      }
    });
  }
});
