// Scrollspy + back-to-top interactions
document.addEventListener("DOMContentLoaded", function () {
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
