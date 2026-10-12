/* ==========================================================================
   Syaraf Firas - Portfolio
   script.js

   This file adds three small behaviours:
     1. Mobile navigation (open / close the hamburger menu)
     2. Scroll spy (highlight the nav link for the section you're viewing)
     3. Scroll reveal (fade sections in as they enter the screen)
     4. The current year in the footer

   There are no libraries here - just plain JavaScript.
   ========================================================================== */

(function () {
  "use strict";

  // Does the user prefer reduced motion? If so we skip animations.
  var prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /* ======================================================================
     1. MOBILE NAVIGATION
     ====================================================================== */
  var nav = document.querySelector(".nav");
  var navToggle = document.querySelector(".nav__toggle");
  var navMenu = document.getElementById("nav-menu");

  /**
   * Open or close the mobile menu and keep ARIA state in sync.
   * @param {boolean} shouldOpen
   */
  function setMenu(shouldOpen) {
    if (!nav || !navToggle) return;
    nav.classList.toggle("is-open", shouldOpen);
    navToggle.setAttribute("aria-expanded", String(shouldOpen));
    navToggle.setAttribute(
      "aria-label",
      shouldOpen ? "Close navigation menu" : "Open navigation menu"
    );
  }

  if (navToggle) {
    navToggle.addEventListener("click", function () {
      var isOpen = nav.classList.contains("is-open");
      setMenu(!isOpen);
    });
  }

  // Close the menu after tapping a link (so the mobile menu doesn't stay open)
  if (navMenu) {
    navMenu.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        setMenu(false);
      }
    });
  }

  // Close the menu when clicking outside of it
  document.addEventListener("click", function (event) {
    if (!nav || !nav.classList.contains("is-open")) return;
    if (!nav.contains(event.target)) {
      setMenu(false);
    }
  });

  // Close the menu with the Escape key
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && nav && nav.classList.contains("is-open")) {
      setMenu(false);
      navToggle.focus();
    }
  });

  /* ======================================================================
     2. SCROLL SPY
     Highlights the nav link that matches the section currently on screen.
     ====================================================================== */
  var navLinks = Array.prototype.slice.call(
    document.querySelectorAll(".nav__link")
  );
  var sections = navLinks
    .map(function (link) {
      var id = link.getAttribute("href");
      return id && id.startsWith("#") ? document.querySelector(id) : null;
    })
    .filter(Boolean);

  /**
   * Mark one link as active based on the section id.
   * @param {string} id
   */
  function setActiveLink(id) {
    navLinks.forEach(function (link) {
      var isActive = link.getAttribute("href") === "#" + id;
      link.classList.toggle("is-active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  if ("IntersectionObserver" in window && sections.length) {
    var spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      // Trigger when a section crosses the middle-ish of the viewport
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach(function (section) {
      spy.observe(section);
    });
  }

  /* ======================================================================
     3. SCROLL REVEAL
     Adds .is-visible to .reveal elements as they enter the viewport.
     If IntersectionObserver is missing (very old browsers) or the user
     prefers reduced motion, everything is shown immediately.
     ====================================================================== */
  var revealElements = Array.prototype.slice.call(
    document.querySelectorAll(".reveal")
  );

  if (!("IntersectionObserver" in window) || prefersReducedMotion) {
    revealElements.forEach(function (el) {
      el.classList.add("is-visible");
    });
  } else {
    var revealObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            // Stop watching once it has appeared.
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );

    revealElements.forEach(function (el) {
      revealObserver.observe(el);
    });
  }

  /* ======================================================================
     4. FOOTER YEAR
     Keeps the copyright year up to date automatically.
     ====================================================================== */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();
