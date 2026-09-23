document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const logoBtn = document.getElementById("logo-btn");
  const pageSections = document.querySelectorAll(".page-section");

  function navigateTo(targetPageId) {
    // Hide all page sections
    pageSections.forEach(section => {
      section.classList.remove("active-page");
      section.classList.add("hidden-page");
    });

    const activeSection = document.getElementById(targetPageId);
    if (activeSection) {
      activeSection.classList.remove("hidden-page");
      activeSection.classList.add("active-page");
    }

    // Update 'active' feedback class on menu links
    navLinks.forEach(link => {
      if (link.getAttribute("data-page") === targetPageId) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    // Scroll to top of the page upon navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Handle clicks on navigation items
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetPage = link.getAttribute("data-page");
      navigateTo(targetPage);
    });
  });

  // Handle click on top-left logo to return Home
  if (logoBtn) {
    logoBtn.addEventListener("click", (e) => {
      e.preventDefault();
      navigateTo("page-home");
    });
  }
});
