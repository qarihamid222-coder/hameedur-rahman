document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  // Mobile navigation
  const menuButton = document.querySelector(
    ".menu-toggle, .hamburger"
  );
  const navigation = document.querySelector(
    ".main-nav, nav"
  );

  if (menuButton && navigation) {
    menuButton.addEventListener("click", function () {
      const isOpen = navigation.classList.toggle("is-open");

      menuButton.setAttribute(
        "aria-expanded",
        String(isOpen)
      );
    });

    navigation.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navigation.classList.remove("is-open");

        menuButton.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", function (event) {
      if (
        !navigation.contains(event.target) &&
        !menuButton.contains(event.target)
      ) {
        navigation.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Current year
  const yearElement = document.getElementById("currentYear");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") {
        return;
      }

      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // FAQ: allow the native details elements to work normally
  document.querySelectorAll(".faq-item").forEach(function (item) {
    item.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && item.open) {
        item.open = false;
      }
    });
  });

  // Contact form: open an email draft with the entered details
  const contactForm = document.querySelector(".contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!contactForm.reportValidity()) {
        return;
      }

      const formData = new FormData(contactForm);
      const lines = [];

      formData.forEach(function (value, key) {
        lines.push(key + ": " + value);
      });

      const subject = encodeURIComponent(
        "Course enquiry - Hameed Ur Rahman Academy"
      );

      const body = encodeURIComponent(lines.join("\n"));

      const status = contactForm.querySelector(".form-status");

      /*
       * Replace academy@example.com below with your real
       * academy email address before publishing.
       */
      const academyEmail = "academy@example.com";

      if (status) {
        status.textContent =
          "Your email app will open so you can review and send your enquiry.";
      }

      window.location.href =
        "mailto:" +
        academyEmail +
        "?subject=" +
        subject +
        "&body=" +
        body;
    });
  }

  // Back to top
  document.querySelectorAll(".back-to-top").forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });

});
