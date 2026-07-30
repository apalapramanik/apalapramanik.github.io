// Smooth-scroll to the section following the given selector.
// Used by the chevron affordance at the bottom of a section.
function scrollToNext(currentSelector) {
    const current = document.querySelector(currentSelector);
    if (!current) return;
    let next = current.nextElementSibling;
    while (next && !next.classList.contains("section")) {
        next = next.nextElementSibling;
    }
    if (next) {
        next.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

// Scrollspy + back-to-top interactions
document.addEventListener("DOMContentLoaded", function () {
    // Mobile navigation toggle
    const navbar = document.querySelector(".navbar");
    const navToggle = document.getElementById("nav-toggle");
    if (navbar && navToggle) {
        navToggle.addEventListener("click", function () {
            const open = navbar.classList.toggle("nav-open");
            navToggle.setAttribute("aria-expanded", open ? "true" : "false");
            navToggle.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
        });

        // Close the panel after tapping a link
        navbar.querySelectorAll(".nav-links a").forEach(function (link) {
            link.addEventListener("click", function () {
                navbar.classList.remove("nav-open");
                navToggle.setAttribute("aria-expanded", "false");
                navToggle.setAttribute("aria-label", "Open navigation menu");
            });
        });

        // Close on Escape, and on click outside the bar
        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape" && navbar.classList.contains("nav-open")) {
                navbar.classList.remove("nav-open");
                navToggle.setAttribute("aria-expanded", "false");
                navToggle.focus();
            }
        });
        document.addEventListener("click", function (e) {
            if (navbar.classList.contains("nav-open") && !navbar.contains(e.target)) {
                navbar.classList.remove("nav-open");
                navToggle.setAttribute("aria-expanded", "false");
            }
        });
    }

    // Navbar scrollspy: highlight active section
    const navLinks = document.querySelectorAll(".navbar a[href^='#']");
    const sectionIds = Array.from(navLinks)
        .map(function (a) { return a.getAttribute("href"); })
        .filter(function (h) { return h && h.length > 1; });
    const sections = sectionIds
        .map(function (id) { return document.querySelector(id); })
        .filter(Boolean);

    const spyObserver = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    const id = "#" + entry.target.id;
                    navLinks.forEach(function (link) {
                        if (link.getAttribute("href") === id) {
                            link.classList.add("nav-active");
                        } else {
                            link.classList.remove("nav-active");
                        }
                    });
                }
            });
        },
        { threshold: 0.35 }
    );
    sections.forEach(function (s) { spyObserver.observe(s); });

    // Back-to-top button visibility
    const backToTop = document.getElementById("back-to-top");
    if (backToTop) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 600) {
                backToTop.classList.add("visible");
            } else {
                backToTop.classList.remove("visible");
            }
        });
        backToTop.addEventListener("click", function (e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // Dark / Light theme toggle
    const themeToggle = document.getElementById("theme-toggle");
    if (themeToggle) {
        themeToggle.addEventListener("click", function () {
            const current = document.documentElement.getAttribute("data-theme");
            if (current === "dark") {
                document.documentElement.removeAttribute("data-theme");
                try { localStorage.setItem("theme", "light"); } catch (e) {}
            } else {
                document.documentElement.setAttribute("data-theme", "dark");
                try { localStorage.setItem("theme", "dark"); } catch (e) {}
            }
        });
    }
});
